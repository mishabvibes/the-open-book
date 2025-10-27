# Contact Form - Quick Start Guide ⚡

## 🎯 3-Minute Setup

### 1. Create Google Sheet
1. Go to [sheets.google.com](https://sheets.google.com)
2. New sheet with headers: `Timestamp | Name | Email | Phone | Course | Message`

### 2. Add Apps Script
1. In sheet: **Extensions** → **Apps Script**
2. Copy code from `GOOGLE_SHEETS_SETUP.md` (Step 2)
3. Update `YOUR_EMAIL` in the CONFIG section
4. Save project as "Contact Form Handler"

### 3. Deploy Web App
1. Click **Deploy** → **New deployment**
2. Select type: **Web app**
3. Set "Who has access" to **Anyone**
4. Copy the **Web app URL**

### 4. Configure Next.js
Create `.env.local` in project root:
```env
NEXT_PUBLIC_GOOGLE_SCRIPT_URL=YOUR_WEB_APP_URL_HERE
```

### 5. Restart & Test
```bash
npm run dev
```

Visit `/contact` and submit the form! ✨

---

📖 **Full detailed guide**: See `GOOGLE_SHEETS_SETUP.md`

## Environment Variable Template

Create a file named `.env.local` in your project root with:

```env
# Google Apps Script Web App URL for Contact Form
NEXT_PUBLIC_GOOGLE_SCRIPT_URL=https://script.google.com/macros/s/YOUR_SCRIPT_ID_HERE/exec
```

⚠️ **Important**: Never commit `.env.local` to git (it's already in `.gitignore`)

## For Production Deployment

Add the environment variable to your hosting platform:

**Vercel:**
1. Project Settings → Environment Variables
2. Name: `NEXT_PUBLIC_GOOGLE_SCRIPT_URL`
3. Value: Your Google Apps Script URL
4. Redeploy

**Netlify:**
1. Site Settings → Environment Variables
2. Add `NEXT_PUBLIC_GOOGLE_SCRIPT_URL`
3. Redeploy

## ✅ What This Gives You (100% FREE)

- ✅ All form submissions saved to Google Sheets
- ✅ Email notification for each submission
- ✅ Beautiful HTML email with contact details
- ✅ No database needed
- ✅ No monthly costs
- ✅ Unlimited submissions
- ✅ Works on all hosting platforms

## 🆘 Troubleshooting

**Form not submitting?**
- Check `.env.local` exists and has the correct URL
- Restart dev server after creating `.env.local`
- Verify Apps Script is deployed with "Anyone" access

**No email received?**
- Check spam folder
- Verify email address in Apps Script CONFIG
- Test using the `testScript` function in Apps Script

**Not saving to sheet?**
- Check sheet has correct headers
- Check Apps Script execution logs
- Re-authorize the script if needed


