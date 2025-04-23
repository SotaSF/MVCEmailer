const EmailModel = require('../models/emailModel');

exports.getEmailForm = (req, res) => {
  res.render('email/form', { title: 'Send Email' });
};

exports.sendEmail = async (req, res) => {
  try {
    const { to, subject, message } = req.body;
    
    // Validate input
    if (!to || !subject || !message) {
      return res.status(400).render('email/form', { 
        title: 'Send Email',
        error: 'All fields are required',
        formData: req.body
      });
    }

    
    const email = new EmailModel(to, subject, message);
    const result = await email.send();

    res.render('email/success', { 
      title: 'Email Sent',
      result
    });
  } catch (error) {
    console.error('Email sending error:', error);
    res.status(500).render('email/form', { 
      title: 'Send Email',
      error: 'Failed to send email. Please try again.',
      formData: req.body
    });
  }
};