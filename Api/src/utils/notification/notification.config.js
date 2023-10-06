const nodemailer = require('nodemailer');
require('dotenv').config();
const { USER, PASS } = process.env;
const ejs = require('ejs');
const path = require('path');

const notification = async (userData) => {
  const transporter = nodemailer.createTransport({
    service: 'Gmail', 
    auth: {
      user: USER,
      pass: PASS,
    },
  });

  const { to, subject, text, template } = userData;

  const templatePath = path.join(__dirname, 'templates', template);

  try {
    const htmlContent = await ejs.renderFile(templatePath);
    
    const mailOptions = {
      from: USER,
      to,
      subject,
      text,
      html: htmlContent,
    };

    const info = await transporter.sendMail(mailOptions);
    console.log('E-mail sent successfully:', info.response);
  } catch (error) {
    console.error('Error sending E-mail:', error);
    throw error;
  }
};

const userData = {
  to: 'juancho50301@gmail.com',
  subject: 'envío de notificación nodemailer',
  text: 'Gracias por usar nodemailer.',
  template: 'notification.ejs', // Asegúrate de que el archivo existe en la carpeta 'templates'
};

notification(userData);

module.exports = notification
