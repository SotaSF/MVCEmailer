const EmailService = require('../services/emailService');

class EmailModel {
  constructor(to, subject, message) {
    this.to = to;
    this.subject = subject;
    this.message = message;
    this.timestamp = new Date();
  }

  async send() {
    try {
      
      await EmailService.sendEmail(this.to, this.subject, this.message);
      
      return {
        success: true,
        to: this.to,
        subject: this.subject,
        timestamp: this.timestamp
      };
    } catch (error) {
      console.error('Error in EmailModel.send():', error);
      throw error;
    }
  }
}

module.exports = EmailModel;