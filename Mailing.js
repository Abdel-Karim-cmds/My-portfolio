const nodemailer = require('nodemailer');
require('dotenv').config();

const transporter = nodemailer.createTransport({
  host: process.env.mail_server,
  secure: true,
  port: 465,
  auth: {
    user: process.env.mail_user,
    pass: process.env.mail_pass,
  },
  tls: {
    rejectUnauthorized: false,
  },
});

async function sendMail({ fullname, email, message }) {
  const mailOptions = {
    from: email,
    to: process.env.mail_user,
    subject: `New message from ${fullname} from portfolio website`,
    text: message,
    html:  `
    <div style="font-family: Arial, sans-serif; background: #f9fafb; padding: 20px;">
    <div style="max-width: 600px; margin: auto; background: white; border-radius: 8px; box-shadow: 0 2px 6px rgba(0,0,0,0.1); overflow: hidden;">
      <div style="background: #2563eb; color: white; padding: 16px 24px;">
        <h2 style="margin: 0;">📬 New Message from Your Portfolio</h2>
      </div>
      <div style="padding: 24px;">
        <p style="font-size: 16px;">You’ve received a new message through your portfolio contact form.</p>
        <table style="width: 100%; border-collapse: collapse; margin-top: 16px;">
          <tr>
            <td style="padding: 8px; font-weight: bold; width: 80px;">Name:</td>
            <td style="padding: 8px;">${fullname}</td>
          </tr>
          <tr style="background: #f3f4f6;">
            <td style="padding: 8px; font-weight: bold;">Email:</td>
            <td style="padding: 8px;">${email}</td>
          </tr>
          <tr>
            <td style="padding: 8px; font-weight: bold; vertical-align: top;">Message:</td>
            <td style="padding: 8px; white-space: pre-line;">${message}</td>
          </tr>
        </table>
      </div>
      <div style="background: #f3f4f6; padding: 16px 24px; font-size: 13px; color: #6b7280;">
        <p style="margin: 0;">This message was sent from your portfolio website’s contact form.</p>
      </div>
    </div>
  </div>
  `,
  };    
    try {
      await transporter.sendMail(mailOptions);
      return { success: true };
    } catch (error) {
      console.error('Error sending email:', error);
      return { success: false };
    }
}

module.exports = { sendMail };
