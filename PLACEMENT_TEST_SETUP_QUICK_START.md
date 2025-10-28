# Placement Test - Quick Start Guide ⚡

## 🎯 5-Minute Setup

### 1. Create Google Sheet
1. Go to [sheets.google.com](https://sheets.google.com)
2. New sheet with headers: `Timestamp | Name | Email | WhatsApp | CEFR Level | Score | Percentage | Time Taken | Course Recommended`

### 2. Add Apps Script
1. In sheet: **Extensions** → **Apps Script**
2. Copy code from `PLACEMENT_TEST_GOOGLE_SHEETS_SETUP.md` (Step 2)
3. Update `YOUR_EMAIL` in the CONFIG section
4. Save project as "Placement Test Handler"

### 3. Test the Script
1. Select **`testPlacementScript`** from function dropdown
2. Click Run and authorize
3. Check sheet and email

### 4. Deploy Web App
1. Click **Deploy** → **New deployment**
2. Select type: **Web app**
3. Set "Who has access" to **Anyone**
4. Copy the **Web app URL**

### 5. Configure Next.js
Add to your `.env.local` file:
```env
NEXT_PUBLIC_PLACEMENT_TEST_SCRIPT_URL=YOUR_WEB_APP_URL_HERE
```

### 6. Restart & Test
```bash
npm run dev
```

Visit `/placement-test`, complete a test, and check your results! ✨

---

## Environment Variable Template

Your `.env.local` should now have **both**:

```env
# Contact Form
NEXT_PUBLIC_GOOGLE_SCRIPT_URL=https://script.google.com/macros/s/CONTACT_FORM_SCRIPT_ID/exec

# Placement Test
NEXT_PUBLIC_PLACEMENT_TEST_SCRIPT_URL=https://script.google.com/macros/s/PLACEMENT_TEST_SCRIPT_ID/exec
```

## ✅ What You Get (100% FREE)

- ✅ All test results saved to Google Sheets
- ✅ Email notification for each completed test
- ✅ Beautiful HTML email with student results
- ✅ Color-coded CEFR levels in spreadsheet
- ✅ Quick contact links (Email & WhatsApp)
- ✅ Automatic course recommendations

## 📊 Google Sheet Features

The sheet will show:
- 🟢 **C1-C2** (Advanced) - Green
- 🔵 **B2** (Upper Intermediate) - Blue  
- 🟡 **B1** (Intermediate) - Yellow
- 🟠 **A2** (Elementary) - Orange
- 🔴 **A1** (Beginner) - Red

## 📧 Email Features

Each email includes:
- Student's CEFR level badge
- Score: X/12 (percentage)
- Time taken in minutes
- Contact information
- Recommended course
- Quick action buttons for WhatsApp & Email

## 🆘 Troubleshooting

**Test not submitting?**
- Check `.env.local` has `NEXT_PUBLIC_PLACEMENT_TEST_SCRIPT_URL`
- Restart dev server
- Verify Apps Script deployed with "Anyone" access

**No email received?**
- Check spam folder
- Verify email in Apps Script CONFIG
- Test using `testPlacementScript` function

---

📖 **Full detailed guide**: See `PLACEMENT_TEST_GOOGLE_SHEETS_SETUP.md`


