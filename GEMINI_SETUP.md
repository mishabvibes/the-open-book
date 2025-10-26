# Gemini API Setup Guide

## 🚀 How to Enable AI-Powered Placement Test

Your placement test now uses **Google Gemini AI** to generate unique questions for each student!

### Step 1: Get Your Free Gemini API Key

1. Visit [Google AI Studio](https://aistudio.google.com/app/apikey)
2. Sign in with your Google account
3. Click "Create API Key"
4. Copy your API key

### Step 2: Add API Key to Your Project

Create a file named `.env.local` in your project root:

```bash
GEMINI_API_KEY=your_api_key_here
```

Replace `your_api_key_here` with your actual API key.

### Step 3: Restart Your Development Server

```bash
npm run dev
```

## ✨ Features

- **Unique Questions**: Every student gets different questions
- **Anti-Cheating**: Questions are generated per student
- **CEFR Levels**: Questions match A1 to C2 difficulty
- **Fallback**: If API fails, uses backup static questions
- **Free Tier**: Gemini API has generous free limits

## 📊 API Usage

- Free tier: 60 requests per minute
- Each test generation = 6 API calls (one per CEFR level)
- Cost: **100% FREE** for most use cases

## 🔒 Security

- API key is stored server-side only
- Students never see the API key
- Questions are generated dynamically
- No question database needed

## 🛠️ Troubleshooting

**Problem**: "Gemini API key not configured"
**Solution**: Make sure `.env.local` exists with `GEMINI_API_KEY` set

**Problem**: Test uses static questions
**Solution**: This is normal fallback behavior if API fails. Check your API key and internet connection.

**Problem**: Questions take too long to generate
**Solution**: Normal generation takes 10-15 seconds. If it takes longer, check your API quota.

## 📝 Notes

- Questions are NOT saved (privacy by design)
- Each test session generates fresh questions
- API calls are made server-side for security
- Fallback questions ensure test always works

Enjoy your AI-powered placement test! 🎉


