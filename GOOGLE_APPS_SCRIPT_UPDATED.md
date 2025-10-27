# Updated Google Apps Script for Contact Form

## Copy this entire code to your Apps Script editor:

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
// This is called automatically by web requests - DON'T run this manually!
function doPost(e) {
  try {
    // Check if event object exists
    if (!e || !e.postData) {
      throw new Error('No POST data received. This function should be called via web request, not manually.');
    }
    
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

// ⚠️ TEST FUNCTION - Run this one manually to test!
// Select "testScript" from the function dropdown and click Run
function testScript() {
  Logger.log('=== Starting Test ===');
  
  const testData = {
    timestamp: new Date().toISOString(),
    name: 'Test User from The Open Book',
    email: 'test@example.com',
    phone: '+91 88934 67437',
    course: 'Spoken English',
    message: 'This is a test message to verify the contact form is working correctly. If you receive this email and see this data in your Google Sheet, everything is set up properly! 🎉'
  };
  
  try {
    Logger.log('Saving to sheet...');
    saveToSheet(testData);
    Logger.log('✅ Data saved to sheet successfully!');
    
    Logger.log('Sending email...');
    sendEmailNotification(testData);
    Logger.log('✅ Email sent successfully!');
    
    Logger.log('=== Test Completed Successfully! ===');
    Logger.log('Check your Google Sheet for the test row.');
    Logger.log('Check your email: ' + CONFIG.YOUR_EMAIL);
    
  } catch (error) {
    Logger.log('❌ Test failed with error: ' + error.toString());
  }
}
```

## 🧪 How to Test:

1. **Select Function**: In the dropdown at the top, choose **`testScript`**
2. **Click Run**: Click the ▶️ Run button
3. **Authorize**: First time only - grant permissions
4. **Check Results**:
   - View logs: `Ctrl+Enter` or View → Logs
   - Check your Google Sheet for a new test row
   - Check your email for the test notification

## ✅ What You Should See:

**In Execution Log:**
```
=== Starting Test ===
Saving to sheet...
Data saved to sheet successfully
✅ Data saved to sheet successfully!
Sending email...
Email sent successfully to theopenbookbyhira@gmail.com
✅ Email sent successfully!
=== Test Completed Successfully! ===
Check your Google Sheet for the test row.
Check your email: theopenbookbyhira@gmail.com
```

**In Google Sheet:**
A new row with test data

**In Your Email:**
A beautifully formatted email with the test submission

## 🚀 After Testing Successfully:

Once the test works, proceed with deploying as a Web App (as described in the original guide).

**Remember:**
- ✅ Run `testScript` for testing
- ❌ Don't run `doPost` manually - it's called automatically by web requests

