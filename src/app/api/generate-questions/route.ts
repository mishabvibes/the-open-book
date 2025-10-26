import { GoogleGenerativeAI } from '@google/generative-ai';
import { NextResponse } from 'next/server';

// Initialize Gemini AI
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY || 'AIzaSyC_UrhNIe7PROJ_PqG_oKfSh39ZD-Pgv1A');

const CEFR_LEVELS = [
  { level: 'A1', count: 2, description: 'Beginner level - basic phrases and simple sentences' },
  { level: 'A2', count: 2, description: 'Elementary level - simple everyday situations' },
  { level: 'B1', count: 3, description: 'Intermediate level - familiar matters and travel' },
  { level: 'B2', count: 3, description: 'Upper intermediate - abstract topics and spontaneous interaction' },
  { level: 'C1', count: 2, description: 'Advanced - complex topics and nuanced expression' },
];

export async function POST(request: Request) {
  try {
    const { studentId } = await request.json();

    // Check if API key is configured
    if (!process.env.GEMINI_API_KEY) {
      return NextResponse.json(
        { error: 'Gemini API key not configured' },
        { status: 500 }
      );
    }

    const model = genAI.getGenerativeModel({ model: 'gemini-2.0-flash-exp' });

    const allQuestions: any[] = [];
    let questionId = 1;

    // Generate questions for each CEFR level
    for (const levelInfo of CEFR_LEVELS) {
      const prompt = `Generate ${levelInfo.count} unique English grammar and vocabulary multiple-choice questions for CEFR ${levelInfo.level} level (${levelInfo.description}).

IMPORTANT REQUIREMENTS:
1. Each question must have exactly 4 options (A, B, C, D)
2. Only ONE option should be correct
3. Questions should test grammar, vocabulary, or comprehension
4. Difficulty should match CEFR ${levelInfo.level} level
5. Avoid repetitive question patterns
6. Make questions practical and relevant

Return ONLY a valid JSON array with this exact structure (no markdown, no extra text):
[
  {
    "question": "Question text here?",
    "options": ["Option A", "Option B", "Option C", "Option D"],
    "correctAnswer": 0,
    "explanation": "Brief explanation why this is correct"
  }
]

Generate ${levelInfo.count} questions now:`;

      const result = await model.generateContent(prompt);
      const response = await result.response;
      const text = response.text();

      // Clean the response - remove markdown code blocks if present
      let cleanedText = text.trim();
      if (cleanedText.startsWith('```json')) {
        cleanedText = cleanedText.replace(/```json\n?/g, '').replace(/```\n?/g, '');
      } else if (cleanedText.startsWith('```')) {
        cleanedText = cleanedText.replace(/```\n?/g, '');
      }

      try {
        const questions = JSON.parse(cleanedText);

        // Add metadata to each question
        questions.forEach((q: any, index: number) => {
          allQuestions.push({
            id: questionId++,
            level: levelInfo.level,
            question: q.question,
            options: q.options,
            correctAnswer: q.correctAnswer,
            explanation: q.explanation,
          });
        });
      } catch (parseError) {
        console.error(`Failed to parse questions for ${levelInfo.level}:`, cleanedText);
        // Return error with details
        return NextResponse.json(
          {
            error: `Failed to generate questions for ${levelInfo.level}`,
            details: cleanedText.substring(0, 200),
          },
          { status: 500 }
        );
      }

      // Add a small delay to avoid rate limiting
      await new Promise(resolve => setTimeout(resolve, 1000));
    }

    return NextResponse.json({
      questions: allQuestions,
      studentId,
      generatedAt: new Date().toISOString(),
    });
  } catch (error: any) {
    console.error('Error generating questions:', error);
    return NextResponse.json(
      {
        error: 'Failed to generate questions',
        message: error.message,
      },
      { status: 500 }
    );
  }
}

