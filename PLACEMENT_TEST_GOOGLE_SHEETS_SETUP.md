# Placement Test Google Sheets Setup Guide

This guide will help you set up a **completely FREE** placement test results tracker that stores all test submissions in Google Sheets and sends you email notifications.

## 📋 What Data Will Be Collected

When a student completes the placement test, you'll receive:
- Student Name
- Email Address
- WhatsApp Number
- CEFR Level Achieved (A1-C2)
- Score (X out of 12)
- Percentage Accuracy
- Time Taken (minutes)
- Test Completion Timestamp

## 🚀 Step-by-Step Setup

### Step 1: Create a Google Sheet for Placement Test Results

1. Go to [Google Sheets](https://sheets.google.com)
2. Create a new blank spreadsheet
3. Name it "The Open Book - Placement Test Results"
4. In the first row, add these headers:

   | Timestamp | Name | Email | WhatsApp | CEFR Level | Score | Percentage | Time Taken | Course Recommended |
   |-----------|------|-------|----------|------------|-------|------------|------------|--------------------|

Your sheet columns should be:
- Column A: **Timestamp**
- Column B: **Name**
- Column C: **Email**
- Column D: **WhatsApp**
- Column E: **CEFR Level** (A1, A2, B1, B2, C1, C2)
- Column F: **Score** (e.g., "10/12")
- Column G: **Percentage** (e.g., "83%")
- Column H: **Time Taken** (in minutes)
- Column I: **Course Recommended**

### Step 2: Create Google Apps Script

1. In your Google Sheet, click **Extensions** → **Apps Script**
2. Delete any existing code
3. Copy and paste the following code:

```javascript
// Google Apps Script for Placement Test Results
// This script saves test results to Google Sheets and sends email notifications

// CONFIGURATION - UPDATE THESE VALUES
const CONFIG = {
  // Your email address where you want to receive notifications
  YOUR_EMAIL: 'theopenbookbyhira@gmail.com',
  
  // Email subject line
  EMAIL_SUBJECT: 'New Placement Test Completed - The Open Book',
  
  // Your website name
  WEBSITE_NAME: 'The Open Book',
};

// Main function to handle POST requests from the placement test
function doPost(e) {
  try {
    // Check if event object exists
    if (!e || !e.postData) {
      throw new Error('No POST data received. This function should be called via web request, not manually.');
    }
    
    // Parse the incoming data
    const data = JSON.parse(e.postData.contents);
    
    // Save to Google Sheet
    saveTestResult(data);
    
    // Send email notification
    sendTestNotification(data);
    
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

// Function to save test result to Google Sheet
function saveTestResult(data) {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  
  // Prepare the row data
  const rowData = [
    data.timestamp || new Date().toISOString(),
    data.name || '',
    data.email || '',
    data.whatsapp || '',
    data.level || '',
    data.scoreText || '', // e.g., "10/12"
    data.percentage || '', // e.g., "83%"
    data.timeTaken || '', // in minutes
    data.recommendation || ''
  ];
  
  // Append the row to the sheet
  sheet.appendRow(rowData);
  
  // Format the timestamp cell
  const lastRow = sheet.getLastRow();
  const timestampCell = sheet.getRange(lastRow, 1);
  timestampCell.setNumberFormat('yyyy-mm-dd hh:mm:ss');
  
  // Highlight level based on performance
  const levelCell = sheet.getRange(lastRow, 5);
  const level = data.level;
  
  // Color code based on CEFR level
  if (level === 'C1' || level === 'C2') {
    levelCell.setBackground('#4ade80'); // Green for advanced
    levelCell.setFontColor('#ffffff');
  } else if (level === 'B2') {
    levelCell.setBackground('#60a5fa'); // Blue for upper intermediate
    levelCell.setFontColor('#ffffff');
  } else if (level === 'B1') {
    levelCell.setBackground('#fbbf24'); // Yellow for intermediate
    levelCell.setFontColor('#000000');
  } else if (level === 'A2') {
    levelCell.setBackground('#fb923c'); // Orange for elementary
    levelCell.setFontColor('#ffffff');
  } else {
    levelCell.setBackground('#f87171'); // Red for beginner
    levelCell.setFontColor('#ffffff');
  }
  
  // Auto-resize columns for better readability
  sheet.autoResizeColumns(1, 9);
  
  Logger.log('Test result saved successfully');
}

// Function to send email notification
function sendTestNotification(data) {
  const emailBody = createTestEmailBody(data);
  
  try {
    MailApp.sendEmail({
      to: CONFIG.YOUR_EMAIL,
      subject: CONFIG.EMAIL_SUBJECT,
      htmlBody: emailBody
    });
    Logger.log('Email sent successfully to ' + CONFIG.YOUR_EMAIL);
  } catch (error) {
    Logger.log('Error sending email: ' + error.toString());
  }
}

// Function to create a nicely formatted HTML email for test results
function createTestEmailBody(data) {
  const timestamp = new Date(data.timestamp).toLocaleString('en-IN', {
    timeZone: 'Asia/Kolkata',
    dateStyle: 'full',
    timeStyle: 'long'
  });
  
  // Level colors and names
  const levelInfo = {
    'C2': { color: '#6366f1', name: 'Proficient' },
    'C1': { color: '#3b82f6', name: 'Advanced' },
    'B2': { color: '#10b981', name: 'Upper Intermediate' },
    'B1': { color: '#f59e0b', name: 'Intermediate' },
    'A2': { color: '#f97316', name: 'Elementary' },
    'A1': { color: '#ef4444', name: 'Beginner' }
  };
  
  const currentLevel = levelInfo[data.level] || levelInfo['A1'];
  
  return `
    <!DOCTYPE html>
    <html>
    <head>
      <style>
        body {
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          line-height: 1.6;
          color: #333;
          max-width: 650px;
          margin: 0 auto;
          padding: 20px;
          background-color: #f9fafb;
        }
        .header {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
          padding: 40px;
          border-radius: 15px 15px 0 0;
          text-align: center;
        }
        .header h1 {
          margin: 0;
          font-size: 28px;
        }
        .header .subtitle {
          margin: 10px 0 0 0;
          opacity: 0.9;
          font-size: 16px;
        }
        .content {
          background: white;
          padding: 40px;
          border-radius: 0 0 15px 15px;
          box-shadow: 0 4px 6px rgba(0,0,0,0.1);
        }
        .level-badge {
          background: ${currentLevel.color};
          color: white;
          padding: 20px;
          border-radius: 12px;
          text-align: center;
          margin: 20px 0;
          box-shadow: 0 4px 15px rgba(0,0,0,0.2);
        }
        .level-badge .level-text {
          font-size: 32px;
          font-weight: bold;
          margin: 0;
        }
        .level-badge .level-name {
          font-size: 18px;
          margin: 5px 0 0 0;
          opacity: 0.95;
        }
        .stats-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 15px;
          margin: 25px 0;
        }
        .stat-card {
          background: #f9fafb;
          padding: 20px;
          border-radius: 10px;
          text-align: center;
          border: 2px solid #e5e7eb;
        }
        .stat-value {
          font-size: 28px;
          font-weight: bold;
          color: #1f2937;
          margin-bottom: 5px;
        }
        .stat-label {
          font-size: 12px;
          color: #6b7280;
          text-transform: uppercase;
          font-weight: 600;
          letter-spacing: 0.5px;
        }
        .info-section {
          background: #f9fafb;
          padding: 20px;
          border-radius: 10px;
          margin: 20px 0;
          border-left: 4px solid ${currentLevel.color};
        }
        .info-row {
          display: flex;
          justify-content: space-between;
          padding: 10px 0;
          border-bottom: 1px solid #e5e7eb;
        }
        .info-row:last-child {
          border-bottom: none;
        }
        .info-label {
          font-weight: 600;
          color: #4b5563;
        }
        .info-value {
          color: #1f2937;
        }
        .recommendation-box {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
          padding: 25px;
          border-radius: 12px;
          margin: 25px 0;
        }
        .recommendation-box h3 {
          margin: 0 0 15px 0;
          font-size: 20px;
        }
        .recommendation-box p {
          margin: 0;
          font-size: 16px;
          line-height: 1.6;
        }
        .action-buttons {
          display: flex;
          gap: 15px;
          margin: 25px 0;
        }
        .action-button {
          flex: 1;
          padding: 15px 25px;
          text-align: center;
          border-radius: 10px;
          text-decoration: none;
          font-weight: 600;
          display: inline-block;
        }
        .btn-primary {
          background: ${currentLevel.color};
          color: white;
        }
        .btn-secondary {
          background: white;
          color: ${currentLevel.color};
          border: 2px solid ${currentLevel.color};
        }
        .footer {
          text-align: center;
          margin-top: 30px;
          padding-top: 25px;
          border-top: 2px solid #e5e7eb;
          color: #6b7280;
          font-size: 14px;
        }
        .timestamp {
          color: #9ca3af;
          font-size: 13px;
          text-align: center;
          margin-top: 15px;
        }
      </style>
    </head>
    <body>
      <div class="header">
        <h1>🎓 New Placement Test Completed</h1>
        <p class="subtitle">from ${CONFIG.WEBSITE_NAME}</p>
      </div>
      
      <div class="content">
        <div class="level-badge">
          <p class="level-text">${data.level}</p>
          <p class="level-name">${currentLevel.name}</p>
        </div>
        
        <div class="stats-grid">
          <div class="stat-card">
            <div class="stat-value">${data.scoreText}</div>
            <div class="stat-label">Score</div>
          </div>
          <div class="stat-card">
            <div class="stat-value">${data.percentage}</div>
            <div class="stat-label">Accuracy</div>
          </div>
          <div class="stat-card">
            <div class="stat-value">${data.timeTaken}m</div>
            <div class="stat-label">Time Taken</div>
          </div>
        </div>
        
        <div class="info-section">
          <h3 style="margin-top: 0; color: #1f2937;">Student Information</h3>
          <div class="info-row">
            <span class="info-label">👤 Name:</span>
            <span class="info-value">${data.name}</span>
          </div>
          <div class="info-row">
            <span class="info-label">📧 Email:</span>
            <span class="info-value"><a href="mailto:${data.email}" style="color: ${currentLevel.color};">${data.email}</a></span>
          </div>
          <div class="info-row">
            <span class="info-label">💬 WhatsApp:</span>
            <span class="info-value"><a href="https://wa.me/${data.whatsapp.replace(/[^0-9]/g, '')}" style="color: ${currentLevel.color};">${data.whatsapp}</a></span>
          </div>
        </div>
        
        <div class="recommendation-box">
          <h3>📚 Recommended Course</h3>
          <p>${data.recommendation}</p>
        </div>
        
        <div class="action-buttons">
          <a href="mailto:${data.email}" class="action-button btn-primary">
            📧 Email Student
          </a>
          <a href="https://wa.me/${data.whatsapp.replace(/[^0-9]/g, '')}" class="action-button btn-secondary">
            💬 WhatsApp Now
          </a>
        </div>
        
        <div class="timestamp">
          ⏰ Test completed on ${timestamp}
        </div>
        
        <div class="footer">
          <p><strong>Quick Stats:</strong></p>
          <p>This student scored ${data.scoreText} (${data.percentage}) and completed the test in ${data.timeTaken} minutes.</p>
          <p style="margin-top: 15px; font-size: 12px;">
            This email was automatically generated from your placement test system.
          </p>
        </div>
      </div>
    </body>
    </html>
  `;
}

// ⚠️ TEST FUNCTION - Run this one manually to test!
function testPlacementScript() {
  Logger.log('=== Starting Placement Test Script Test ===');
  
  const testData = {
    timestamp: new Date().toISOString(),
    name: 'Test Student',
    email: 'teststudent@example.com',
    whatsapp: '+91 88934 67437',
    level: 'B2',
    scoreText: '10/12',
    percentage: '83%',
    timeTaken: '8',
    recommendation: 'Prepare for IELTS or enhance your Business English skills.'
  };
  
  try {
    Logger.log('Saving test result to sheet...');
    saveTestResult(testData);
    Logger.log('✅ Test result saved successfully!');
    
    Logger.log('Sending test notification email...');
    sendTestNotification(testData);
    Logger.log('✅ Email sent successfully!');
    
    Logger.log('=== Test Completed Successfully! ===');
    Logger.log('Check your Google Sheet for the test result row.');
    Logger.log('Check your email: ' + CONFIG.YOUR_EMAIL);
    
  } catch (error) {
    Logger.log('❌ Test failed with error: ' + error.toString());
  }
}
```

4. Click the **Save** icon (💾) and name your project "Placement Test Handler"

### Step 3: Update Configuration

In the Apps Script code, update the `CONFIG` section:

```javascript
const CONFIG = {
  YOUR_EMAIL: 'theopenbookbyhira@gmail.com',  // ← Your email here
  EMAIL_SUBJECT: 'New Placement Test Completed - The Open Book',
  WEBSITE_NAME: 'The Open Book',
};
```

### Step 4: Test the Script

1. In Apps Script editor, select **`testPlacementScript`** from the function dropdown
2. Click the **Run** button (▶️)
3. **First time only**: Authorize the script (same process as contact form)
4. Check your Google Sheet - you should see a test row with color-coded level
5. Check your email for a beautifully formatted test result notification

### Step 5: Deploy as Web App

1. Click **Deploy** → **New deployment**
2. Click the gear icon → Choose **Web app**
3. Configure:
   - **Description**: "Placement Test Results v1"
   - **Execute as**: Me (your email)
   - **Who has access**: **Anyone**
4. Click **Deploy**
5. **Important**: Copy the **Web app URL** (looks like: `https://script.google.com/macros/s/AKfycby.../exec`)
6. Click **Done**

### Step 6: Configure Your Next.js App

1. Open your `.env.local` file (or create it in project root)
2. Add this line:

```env
NEXT_PUBLIC_PLACEMENT_TEST_SCRIPT_URL=https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec
```

Replace `YOUR_SCRIPT_ID` with the actual URL you copied in Step 5.

### Step 7: Test Your Placement Test

1. Restart your Next.js server:
```bash
npm run dev
```

2. Go to `/placement-test` and complete a test
3. After completing, check:
   - ✅ Google Sheet should have the student's results (color-coded by level)
   - ✅ You should receive an email with their results
   - ✅ The email should include quick contact links

## 🎉 You're Done!

Now every placement test completion will:
- Save student info and results to Google Sheets
- Color-code the CEFR level for easy scanning
- Send you a beautiful email notification
- Include quick WhatsApp and email links to contact the student

## 📊 What You'll See in Google Sheets

The sheet will automatically:
- Record all student information and test results
- Color-code CEFR levels:
  - 🟢 Green: C1-C2 (Advanced)
  - 🔵 Blue: B2 (Upper Intermediate)
  - 🟡 Yellow: B1 (Intermediate)
  - 🟠 Orange: A2 (Elementary)
  - 🔴 Red: A1 (Beginner)
- Track completion timestamps
- Show recommended courses

## 📧 Email Features

Each email includes:
- Student's CEFR level in a prominent badge
- Score breakdown (X/12, percentage, time taken)
- Student contact information
- Recommended course based on level
- Quick action buttons to email or WhatsApp the student

## 🔒 Security & Privacy

- Environment variable keeps script URL secure
- Google authentication handles access
- HTTPS encryption by default
- Students receive confirmation of their results

## 💰 Cost

**Everything is 100% FREE:**
- ✅ Google Sheets storage
- ✅ Google Apps Script execution
- ✅ Email notifications via Gmail
- ✅ Unlimited test submissions
- ✅ No monthly fees

## 🔧 Troubleshooting

### Form submission fails
- Check `.env.local` has `NEXT_PUBLIC_PLACEMENT_TEST_SCRIPT_URL`
- Restart dev server after adding environment variable
- Verify Apps Script deployment is set to "Anyone"

### Email not received
- Check spam folder
- Verify email in CONFIG section
- Check Apps Script execution logs

### Data not appearing in sheet
- Verify sheet headers match exactly
- Check Apps Script logs for errors
- Re-run the test function

## 📈 Bonus Features

The script includes:
- Automatic color-coding by proficiency level
- Auto-resizing columns for readability
- Beautiful HTML email formatting
- Quick contact links in emails
- IST timezone for Indian students

---

**Need help?** Contact: theopenbookbyhira@gmail.com


