# Google Sheets Contact Form Setup Guide

This guide will help you set up a **completely FREE** contact form that stores data in Google Sheets and sends email notifications.

## 📋 What You'll Need

- A Google account
- 15 minutes of your time

## 🚀 Step-by-Step Setup

### Step 1: Create a Google Sheet

1. Go to [Google Sheets](https://sheets.google.com)
2. Create a new blank spreadsheet
3. Name it "The Open Book - Contact Form Submissions"
4. In the first row, add these headers:
   - Column A: **Timestamp**
   - Column B: **Name**
   - Column C: **Email**
   - Column D: **Phone**
   - Column E: **Course**
   - Column F: **Message**

Your sheet should look like this:

```
| Timestamp | Name | Email | Phone | Course | Message |
|-----------|------|-------|-------|--------|---------|
```

### Step 2: Create Google Apps Script

1. In your Google Sheet, click **Extensions** → **Apps Script**
2. Delete any existing code
3. Copy and paste the following code:

```javascript
// Google Apps Script for Contact Form
// This script saves form data to Google Sheets and sends email notifications

// CONFIGURATION - UPDATE THESE VALUES
const CONFIG = {
  // Your email address where you want to receive notifications
  YOUR_EMAIL: 'theopenbookbyhira@gmail.com',
  
  // Email subject line
  EMAIL_SUBJECT: 'New Contact Form Submission - The Open Book',
  
  // Your website name
  WEBSITE_NAME: 'The Open Book',
};

// Main function to handle POST requests from the contact form
function doPost(e) {
  try {
    // Parse the incoming data
    const data = JSON.parse(e.postData.contents);
  
    // Save to Google Sheet
    saveToSheet(data);
  
    // Send email notification
    sendEmailNotification(data);
  
    // Return success response
    return ContentService
      .createTextOutput(JSON.stringify({ 'result': 'success', 'data': data }))
      .setMimeType(ContentService.MimeType.JSON);
    
  } catch (error) {
    // Log error and return error response
    Logger.log('Error: ' + error.toString());
    return ContentService
      .createTextOutput(JSON.stringify({ 'result': 'error', 'error': error.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

// Function to save data to Google Sheet
function saveToSheet(data) {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  
  // Prepare the row data
  const rowData = [
    data.timestamp || new Date().toISOString(),
    data.name || '',
    data.email || '',
    data.phone || '',
    data.course || '',
    data.message || ''
  ];
  
  // Append the row to the sheet
  sheet.appendRow(rowData);
  
  // Format the timestamp cell (convert to readable date)
  const lastRow = sheet.getLastRow();
  const timestampCell = sheet.getRange(lastRow, 1);
  timestampCell.setNumberFormat('yyyy-mm-dd hh:mm:ss');
  
  // Auto-resize columns for better readability
  sheet.autoResizeColumns(1, 6);
  
  Logger.log('Data saved to sheet successfully');
}

// Function to send email notification
function sendEmailNotification(data) {
  const emailBody = createEmailBody(data);
  
  try {
    MailApp.sendEmail({
      to: CONFIG.YOUR_EMAIL,
      subject: CONFIG.EMAIL_SUBJECT,
      htmlBody: emailBody
    });
    Logger.log('Email sent successfully to ' + CONFIG.YOUR_EMAIL);
  } catch (error) {
    Logger.log('Error sending email: ' + error.toString());
    // Don't throw error - we still want to save the data even if email fails
  }
}

// Function to create a nicely formatted HTML email
function createEmailBody(data) {
  const timestamp = new Date(data.timestamp).toLocaleString('en-IN', {
    timeZone: 'Asia/Kolkata',
    dateStyle: 'full',
    timeStyle: 'long'
  });
  
  return `
    <!DOCTYPE html>
    <html>
    <head>
      <style>
        body {
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          line-height: 1.6;
          color: #333;
          max-width: 600px;
          margin: 0 auto;
          padding: 20px;
        }
        .header {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
          padding: 30px;
          border-radius: 10px 10px 0 0;
          text-align: center;
        }
        .header h1 {
          margin: 0;
          font-size: 24px;
        }
        .content {
          background: #f9fafb;
          padding: 30px;
          border-radius: 0 0 10px 10px;
        }
        .field {
          background: white;
          margin: 15px 0;
          padding: 15px;
          border-radius: 8px;
          border-left: 4px solid #667eea;
        }
        .field-label {
          font-weight: bold;
          color: #667eea;
          font-size: 12px;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          margin-bottom: 5px;
        }
        .field-value {
          color: #1f2937;
          font-size: 16px;
        }
        .message-box {
          background: white;
          padding: 20px;
          border-radius: 8px;
          border: 2px solid #e5e7eb;
          margin: 15px 0;
          font-style: italic;
        }
        .footer {
          text-align: center;
          margin-top: 30px;
          padding-top: 20px;
          border-top: 2px solid #e5e7eb;
          color: #6b7280;
          font-size: 14px;
        }
        .timestamp {
          color: #6b7280;
          font-size: 14px;
          text-align: center;
          margin-top: 10px;
        }
      </style>
    </head>
    <body>
      <div class="header">
        <h1>🎓 New Contact Form Submission</h1>
        <p style="margin: 10px 0 0 0; opacity: 0.9;">from ${CONFIG.WEBSITE_NAME}</p>
      </div>
    
      <div class="content">
        <div class="field">
          <div class="field-label">👤 Name</div>
          <div class="field-value">${data.name}</div>
        </div>
      
        <div class="field">
          <div class="field-label">📧 Email</div>
          <div class="field-value"><a href="mailto:${data.email}">${data.email}</a></div>
        </div>
      
        <div class="field">
          <div class="field-label">📱 Phone</div>
          <div class="field-value"><a href="tel:${data.phone}">${data.phone}</a></div>
        </div>
      
        <div class="field">
          <div class="field-label">📚 Interested In</div>
          <div class="field-value">${data.course}</div>
        </div>
      
        <div class="field-label" style="margin: 20px 0 10px 0;">💬 Message</div>
        <div class="message-box">
          ${data.message}
        </div>
      
        <div class="timestamp">
          ⏰ Received on ${timestamp}
        </div>
      
        <div class="footer">
          <p><strong>Quick Actions:</strong></p>
          <p>
            <a href="mailto:${data.email}" style="color: #667eea; text-decoration: none; margin: 0 10px;">📧 Reply via Email</a> |
            <a href="tel:${data.phone}" style="color: #667eea; text-decoration: none; margin: 0 10px;">📞 Call Now</a> |
            <a href="https://wa.me/${data.phone.replace(/[^0-9]/g, '')}" style="color: #667eea; text-decoration: none; margin: 0 10px;">💬 WhatsApp</a>
          </p>
          <p style="margin-top: 20px; font-size: 12px;">
            This email was automatically generated from your website contact form.
          </p>
        </div>
      </div>
    </body>
    </html>
  `;
}

// Optional: Function to test the script
function testScript() {
  const testData = {
    timestamp: new Date().toISOString(),
    name: 'Test User',
    email: 'test@example.com',
    phone: '+91 98765 43210',
    course: 'Spoken English',
    message: 'This is a test message to verify the contact form is working correctly.'
  };
  
  saveToSheet(testData);
  sendEmailNotification(testData);
  
  Logger.log('Test completed! Check your sheet and email.');
}
```

4. Click the **Save** icon (💾) and name your project "Contact Form Handler"

### Step 3: Update Configuration

In the Apps Script code you just pasted, find the `CONFIG` section at the top and update:

```javascript
const CONFIG = {
  YOUR_EMAIL: 'theopenbookbyhira@gmail.com',  // ← Your email here
  EMAIL_SUBJECT: 'New Contact Form Submission - The Open Book',
  WEBSITE_NAME: 'The Open Book',
};
```

### Step 4: Test the Script (Optional but Recommended)

1. In Apps Script editor, select the `testScript` function from the dropdown menu
2. Click the **Run** button (▶️)
3. **First time only**: You'll need to authorize the script:
   - Click "Review Permissions"
   - Choose your Google account
   - Click "Advanced" → "Go to Contact Form Handler (unsafe)"
   - Click "Allow"
4. Check your Google Sheet - you should see a test entry
5. Check your email - you should receive a test notification

### Step 5: Deploy as Web App

1. In Apps Script editor, click **Deploy** → **New deployment**
2. Click the gear icon (⚙️) next to "Select type"
3. Choose **Web app**
4. Configure the deployment:
   - **Description**: "Contact Form Endpoint v1"
   - **Execute as**: Me (your email)
   - **Who has access**: Anyone
5. Click **Deploy**
6. **Important**: Copy the **Web app URL** that appears (it looks like: `https://script.google.com/macros/s/AKfycby.../exec`)
7. Click **Done**

### Step 6: Configure Your Next.js App

1. In your project root, create a file named `.env.local` (if it doesn't exist)
2. Add this line with your Web App URL:

```env
NEXT_PUBLIC_GOOGLE_SCRIPT_URL=https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec
NEXT_PUBLIC_GOOGLE_SCRIPT_URL=https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec
```

Replace `YOUR_SCRIPT_ID` with the actual URL you copied in Step 5.

3. **Important**: Add `.env.local` to your `.gitignore` file if it's not already there

### Step 7: Test Your Contact Form

1. Restart your Next.js development server:

```bash
npm run dev
```

2. Go to your contact page: `http://localhost:3000/contact`
3. Fill out and submit the form
4. Check:
   - ✅ Google Sheet should have a new row with the submission
   - ✅ You should receive an email notification
   - ✅ The form should show a success message

## 🎉 You're Done!

Your contact form is now fully functional and completely free!

## 📊 Viewing Your Submissions

- **Google Sheets**: All submissions are stored in your Google Sheet
- **Email**: You'll receive an email for each new submission
- The emails include quick action links to reply, call, or WhatsApp the contact

## 🔒 Security Notes

1. **Never commit `.env.local` to GitHub** - it contains your script URL
2. The Google Apps Script URL is public but can only write to your sheet (no read access from outside)
3. Consider adding CAPTCHA if you get spam (Google reCAPTCHA is free)

## 🚀 For Production (Deployment)

When deploying to Vercel, Netlify, or other platforms:

1. Add the environment variable in your hosting platform:

   - **Vercel**: Project Settings → Environment Variables
   - **Netlify**: Site Settings → Environment Variables
   - Variable name: `NEXT_PUBLIC_GOOGLE_SCRIPT_URL`
   - Value: Your Google Apps Script Web App URL
2. Redeploy your site

## 🔧 Troubleshooting

### Form submission fails

- Check that `.env.local` has the correct URL
- Restart your dev server after adding `.env.local`
- Verify the Apps Script deployment is set to "Anyone" can access

### Email not received

- Check spam/junk folder
- Verify the email address in CONFIG section
- Check Apps Script logs: Apps Script Editor → Execution log

### Data not in Google Sheets

- Make sure the sheet has the correct headers
- Check Apps Script logs for errors
- Re-run the `testScript` function

## 📈 Advanced Features (Optional)

### Add Auto-Response Email

Add this function to your Apps Script to send a confirmation email to the user:

```javascript
function sendAutoResponse(data) {
  const emailBody = `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
      <h2>Thank you for contacting The Open Book!</h2>
      <p>Dear ${data.name},</p>
      <p>We have received your inquiry and will get back to you within 24 hours.</p>
      <p><strong>Your submission details:</strong></p>
      <ul>
        <li>Course Interest: ${data.course}</li>
        <li>Message: ${data.message}</li>
      </ul>
      <p>Best regards,<br>The Open Book Team</p>
    </div>
  `;
  
  MailApp.sendEmail({
    to: data.email,
    subject: 'We received your message - The Open Book',
    htmlBody: emailBody
  });
}
```

Then add this line in the `doPost` function after `sendEmailNotification(data);`:

```javascript
sendAutoResponse(data); // Send confirmation to user
```

### Add Slack Notifications

If you use Slack, you can get notifications there too. Just add your Slack webhook URL and add this function:

```javascript
function sendSlackNotification(data) {
  const webhookUrl = 'YOUR_SLACK_WEBHOOK_URL';
  const payload = {
    text: `🎓 New Contact Form Submission from ${data.name}`,
    blocks: [
      {
        type: 'section',
        text: {
          type: 'mrkdwn',
          text: `*Name:* ${data.name}\n*Email:* ${data.email}\n*Phone:* ${data.phone}\n*Course:* ${data.course}\n*Message:* ${data.message}`
        }
      }
    ]
  };
  
  UrlFetchApp.fetch(webhookUrl, {
    method: 'post',
    contentType: 'application/json',
    payload: JSON.stringify(payload)
  });
}
```

## 💡 Tips

- The Google Sheet can handle thousands of submissions
- You can create charts and analytics from the sheet data
- Consider creating a separate sheet tab for each month
- Set up Google Sheet filters to quickly find submissions by course interest

## 🎯 Cost

**Everything is 100% FREE:**

- ✅ Google Sheets: Free
- ✅ Google Apps Script: Free
- ✅ Gmail for notifications: Free
- ✅ Unlimited submissions: Free
- ✅ No monthly fees: Ever!

---

Need help? Contact: theopenbookbyhira@gmail.com
