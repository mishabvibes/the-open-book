# 🧪 How to Test the Gemini API Integration

## 🎯 Test Scenario 1: WITHOUT API Key (Fallback Test)

### This tests that your placement test works even without Gemini API

**Steps:**
1. Make sure you **DON'T** have `.env.local` file (or it's empty)
2. Go to: `http://localhost:3000/placement-test`
3. Fill in the registration form:
   - Name: Test Student
   - Email: test@example.com
   - WhatsApp: +91 9876543210
4. Click **"Begin Test"**

**Expected Result:**
- ✅ You'll see "Preparing Your Test..." screen briefly
- ✅ Console will show: `⚠️ API failed, using fallback questions`
- ✅ Test starts with static questions
- ✅ Everything works normally

**Console Check (Press F12):**
```
⚠️ API failed, using fallback questions
```

---

## 🎯 Test Scenario 2: WITH API Key (AI Generation Test)

### This tests that Gemini AI generates unique questions

**Steps:**
1. **Get FREE API Key:**
   - Go to: https://aistudio.google.com/app/apikey
   - Sign in with Google
   - Click "Create API Key"
   - Copy the key

2. **Create `.env.local` file** in project root:
```bash
GEMINI_API_KEY=your_actual_api_key_here
```

3. **Restart your dev server** (Important!):
```bash
# Stop current server (Ctrl+C)
npm run dev
```

4. Go to: `http://localhost:3000/placement-test`

5. Fill registration form and click **"Begin Test"**

**Expected Result:**
- ✅ "Preparing Your Test..." screen shows for 10-15 seconds
- ✅ You see loading animations
- ✅ Console shows: `✅ Generated unique questions for student: [student-id]`
- ✅ Test starts with **AI-generated unique questions**
- ✅ Questions are different from static fallback

**Console Check (Press F12):**
```
✅ Generated unique questions for student: 1740521234567-abc123
```

---

## 🔍 How to Verify AI Generated Questions

### Method 1: Check Console Logs
1. Open Browser Console (F12)
2. Look for: `✅ Generated unique questions for student:`
3. If you see this = AI is working! 🎉

### Method 2: Compare Questions
1. Take test once, note down questions
2. Refresh page and start again
3. Questions should be **DIFFERENT** each time
4. If different = AI is working! 🎉

### Method 3: Check API Response
1. Open Network tab (F12 → Network)
2. Start the test
3. Look for request to `/api/generate-questions`
4. Check response - should show 25 unique questions
5. If you see JSON response = API is working! 🎉

---

## 🐛 Troubleshooting

### Problem: "Gemini API key not configured"
**Solution:**
- Make sure `.env.local` exists in project root
- Check spelling: `GEMINI_API_KEY=...`
- Restart dev server after creating file

### Problem: Always shows fallback questions
**Solutions:**
1. Check API key is valid (test at https://aistudio.google.com)
2. Check internet connection
3. Open F12 Console to see error message
4. Verify `.env.local` is in root folder (not in `src/`)

### Problem: Questions take too long (>30 seconds)
**Possible Causes:**
- Slow internet connection
- Gemini API rate limit reached
- API service issue
**Solution:** Wait and try again, fallback will activate automatically

### Problem: Build error about GEMINI_API_KEY
**Solution:**
- Add to Vercel/hosting: Environment Variables section
- For local dev: Must be in `.env.local`
- Never commit `.env.local` to git (it's in .gitignore)

---

## ✅ Quick Test Checklist

- [ ] Dev server running (`npm run dev`)
- [ ] Can access `http://localhost:3000/placement-test`
- [ ] Registration form works
- [ ] Without API key: Shows fallback questions ✅
- [ ] With API key: Shows "Preparing Your Test..." ✅
- [ ] With API key: Console shows success message ✅
- [ ] Questions are unique each time ✅
- [ ] Test completes and shows results ✅

---

## 📊 What Should You See?

### Loading Screen (10-15 seconds):
```
🔄 Preparing Your Test...

We're generating personalized questions tailored just for you using AI.

✓ Analyzing your profile
✓ Generating unique questions  
✓ Calibrating difficulty levels

⏱️ This usually takes 10-15 seconds...
```

### After Loading:
- Question 1/25 with progress bar
- Unique questions you've never seen before
- Questions get progressively harder (A1 → C2)

---

## 🎉 Success Indicators

**API Working:**
- ✅ Console: `✅ Generated unique questions`
- ✅ Loading screen appears
- ✅ Questions are unique each time
- ✅ Takes 10-15 seconds to start

**Fallback Working:**
- ✅ Console: `⚠️ API failed, using fallback questions`
- ✅ Test starts immediately (no long loading)
- ✅ Same static questions each time
- ✅ Test still works perfectly

**Both scenarios = Success!** 🎊

---

## 💡 Pro Tips

1. **Test without API key first** - ensures fallback works
2. **Then test with API key** - confirms AI generation
3. **Check console logs** - tells you exactly what's happening
4. **Try multiple times** - verify questions are unique
5. **Test on mobile** - ensure responsive design works

---

## 🔗 Helpful Links

- Get API Key: https://aistudio.google.com/app/apikey
- Gemini Docs: https://ai.google.dev/docs
- Test Page: http://localhost:3000/placement-test

---

Need more help? Check `GEMINI_SETUP.md` for detailed setup guide!

