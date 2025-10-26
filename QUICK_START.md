# 🚀 Quick Start: Enable AI-Powered Placement Test

## Step 1: Get Your FREE Gemini API Key (2 minutes)

1. Go to: **https://aistudio.google.com/app/apikey**
2. Sign in with Google
3. Click **"Create API Key"**
4. Copy the key

## Step 2: Add to Your Project (30 seconds)

Create a file named `.env.local` in your project root folder:

```bash
GEMINI_API_KEY=paste_your_key_here
```

## Step 3: Restart Server (10 seconds)

```bash
npm run dev
```

## ✨ That's It!

Your placement test will now:
- Generate **unique questions** for each student
- Prevent cheating with dynamic content
- Maintain **CEFR standards** (A1-C2)
- Use **fallback questions** if API fails

---

## 🧪 Test It:

1. Go to: `http://localhost:3000/placement-test`
2. Fill registration form
3. You'll see: **"Preparing Your Test..."** screen
4. Watch as AI generates 25 unique questions in 10-15 seconds!

---

## ⚡ Need Help?

- **No API Key?** Test still works with fallback questions
- **Free Forever?** Yes! Gemini has generous free tier
- **Secure?** API key is server-side only, never exposed

Read `GEMINI_SETUP.md` for detailed information.


