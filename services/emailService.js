const nodemailer = require('nodemailer');

class EmailService {
  static async sendEmail(to, subject, message) {
    try {
      // Create a transporter
      const transporter = nodemailer.createTransport({
        host: process.env.EMAIL_HOST,
        port: process.env.EMAIL_PORT,
        secure: process.env.EMAIL_SECURE === 'true',
        auth: {
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_PASSWORD,
        },
      });

      // Send mail with defined transport object
      const info = await transporter.sendMail({
        from: process.env.EMAIL_FROM,
        to: to,
        subject: subject,
        text: message,
        html: message.replace(/\n/g, '<br/>'),
      });

      console.log('Message sent: %s', info.messageId);
      return info;
    } catch (error) {
      console.error('Error in EmailService.sendEmail():', error);
      throw error;
    }
  }
}

module.exports = EmailService;