# Data Collection System Overview

## 📊 Complete FREE Data Collection Setup

Your website now has **two separate data collection systems**, both completely free using Google Sheets and Google Apps Script!

---

## 🎯 System 1: Contact Form

### What It Collects:
- Name
- Email
- Phone Number
- Course Interest
- Message
- Timestamp

### Setup Files:
- 📖 **Detailed Guide**: `GOOGLE_SHEETS_SETUP.md`
- ⚡ **Quick Start**: `CONTACT_FORM_SETUP_QUICK_START.md`
- 📝 **Overview**: `README_CONTACT_FORM.md`

### Google Apps Script URL:
```env
NEXT_PUBLIC_GOOGLE_SCRIPT_URL=YOUR_CONTACT_FORM_SCRIPT_URL
```

---

## 🎓 System 2: Placement Test

### What It Collects:
- Name
- Email  
- WhatsApp Number
- CEFR Level Achieved (A1-C2)
- Test Score (X/12)
- Percentage Accuracy
- Time Taken (minutes)
- Course Recommendation
- Timestamp

### Setup Files:
- 📖 **Detailed Guide**: `PLACEMENT_TEST_GOOGLE_SHEETS_SETUP.md`
- ⚡ **Quick Start**: `PLACEMENT_TEST_SETUP_QUICK_START.md`

### Google Apps Script URL:
```env
NEXT_PUBLIC_PLACEMENT_TEST_SCRIPT_URL=YOUR_PLACEMENT_TEST_SCRIPT_URL
```

---

## ⚙️ Complete Setup Process

### 1️⃣ Contact Form Setup (15 min)

1. **Create Google Sheet #1**: "The Open Book - Contact Form Submissions"
   - Headers: `Timestamp | Name | Email | Phone | Course | Message`

2. **Add Apps Script**: Copy from `GOOGLE_SHEETS_SETUP.md`

3. **Deploy as Web App**: Get URL

4. **Add to `.env.local`**:
   ```env
   NEXT_PUBLIC_GOOGLE_SCRIPT_URL=YOUR_URL_HERE
   ```

### 2️⃣ Placement Test Setup (15 min)

1. **Create Google Sheet #2**: "The Open Book - Placement Test Results"
   - Headers: `Timestamp | Name | Email | WhatsApp | CEFR Level | Score | Percentage | Time Taken | Course Recommended`

2. **Add Apps Script**: Copy from `PLACEMENT_TEST_GOOGLE_SHEETS_SETUP.md`

3. **Deploy as Web App**: Get URL

4. **Add to `.env.local`**:
   ```env
   NEXT_PUBLIC_PLACEMENT_TEST_SCRIPT_URL=YOUR_URL_HERE
   ```

### 3️⃣ Final `.env.local` File

Your complete `.env.local` should look like:

```env
# Contact Form Google Apps Script
NEXT_PUBLIC_GOOGLE_SCRIPT_URL=https://script.google.com/macros/s/CONTACT_SCRIPT_ID/exec

# Placement Test Google Apps Script
NEXT_PUBLIC_PLACEMENT_TEST_SCRIPT_URL=https://script.google.com/macros/s/PLACEMENT_SCRIPT_ID/exec
```

---

## 📧 Email Features

### Contact Form Emails:
- 🎓 New contact form submission notification
- 📧 Contact details with quick action links
- 💬 WhatsApp quick link
- 📞 Click-to-call phone link
- 🎨 Professional gradient design

### Placement Test Emails:
- 🏆 Test completion notification
- 📊 CEFR level badge (color-coded)
- 📈 Score breakdown (X/12, percentage, time)
- 🎯 Recommended course
- 📱 Student contact info with quick links
- 🎨 Level-themed color design

---

## 🎨 Google Sheets Features

### Contact Form Sheet:
- ✅ Clean, organized contact data
- ✅ Auto-formatted timestamps
- ✅ Auto-resized columns
- ✅ Easy export to CSV

### Placement Test Sheet:
- ✅ Color-coded CEFR levels:
  - 🟢 C1-C2 (Advanced)
  - 🔵 B2 (Upper Intermediate)
  - 🟡 B1 (Intermediate)
  - 🟠 A2 (Elementary)
  - 🔴 A1 (Beginner)
- ✅ Complete test analytics
- ✅ Student performance tracking
- ✅ Course recommendation history

---

## 🚀 Testing

### Test Contact Form:
1. Run `testScript` function in Google Apps Script
2. Visit `/contact` and submit form
3. Check sheet and email

### Test Placement Test:
1. Run `testPlacementScript` function in Google Apps Script
2. Visit `/placement-test` and complete test
3. Check sheet and email

---

## 🔒 Security

- ✅ Environment variables keep URLs private
- ✅ HTTPS encryption
- ✅ Google authentication
- ✅ No database credentials to manage
- ✅ Automatic data backup via Google

---

## 💰 Cost Breakdown

### Contact Form:
- Google Sheets: **FREE**
- Google Apps Script: **FREE**
- Email notifications: **FREE**
- **Total: $0/month**

### Placement Test:
- Google Sheets: **FREE**
- Google Apps Script: **FREE**
- Email notifications: **FREE**
- **Total: $0/month**

### Combined Total: **$0/month** ✨

---

## 📁 File Organization

```
the-open-book/
├── .env.local                                    # Your secret URLs (not committed)
├── .env.example                                  # Template for others
│
├── GOOGLE_SHEETS_SETUP.md                        # Contact Form - Full guide
├── CONTACT_FORM_SETUP_QUICK_START.md            # Contact Form - Quick start
├── README_CONTACT_FORM.md                        # Contact Form - Overview
│
├── PLACEMENT_TEST_GOOGLE_SHEETS_SETUP.md        # Placement Test - Full guide
├── PLACEMENT_TEST_SETUP_QUICK_START.md          # Placement Test - Quick start
│
├── DATA_COLLECTION_OVERVIEW.md                   # This file
└── GOOGLE_APPS_SCRIPT_UPDATED.md                # Improved contact form script
```

---

## 🎯 Quick Links

### Contact Form:
- **Page**: `/contact`
- **Component**: `src/components/client/ContactForm.tsx`
- **Guide**: `GOOGLE_SHEETS_SETUP.md`

### Placement Test:
- **Page**: `/placement-test`
- **Component**: `src/app/placement-test/page.tsx`
- **Guide**: `PLACEMENT_TEST_GOOGLE_SHEETS_SETUP.md`

---

## 🆘 Need Help?

**Contact Form Issues:**
- Check: `GOOGLE_SHEETS_SETUP.md` → Troubleshooting section
- Quick fix: `CONTACT_FORM_SETUP_QUICK_START.md`

**Placement Test Issues:**
- Check: `PLACEMENT_TEST_GOOGLE_SHEETS_SETUP.md` → Troubleshooting section
- Quick fix: `PLACEMENT_TEST_SETUP_QUICK_START.md`

---

## ✅ Setup Checklist

### Contact Form:
- [ ] Created Google Sheet with correct headers
- [ ] Added and configured Apps Script
- [ ] Tested with `testScript` function
- [ ] Deployed as Web App
- [ ] Added URL to `.env.local`
- [ ] Tested live form submission
- [ ] Received test email

### Placement Test:
- [ ] Created Google Sheet with correct headers
- [ ] Added and configured Apps Script
- [ ] Tested with `testPlacementScript` function
- [ ] Deployed as Web App
- [ ] Added URL to `.env.local`
- [ ] Tested live placement test
- [ ] Received test email

### Production:
- [ ] Added both URLs to hosting platform (Vercel/Netlify)
- [ ] Redeployed website
- [ ] Tested both systems in production

---

## 🎉 You're All Set!

Both data collection systems are now fully operational and completely free. You'll receive email notifications for:
- Every contact form submission
- Every placement test completion

All data is automatically saved to Google Sheets for easy access and analysis!

**Happy collecting! 📊✨**


