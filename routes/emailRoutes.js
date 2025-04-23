const express = require('express');
const router = express.Router();
const emailController = require('../controllers/emailController');

router.get('/', emailController.getEmailForm);
router.post('/send', emailController.sendEmail);

module.exports = router;