const nodemailer = require('nodemailer');
const router = require('express').Router();

router
  .route('/')
  .get((req, res) => {
    res.render('contact', {
      title: 'Contact - nodemailer'
    });
  })
  .post((req, res) => {
    let transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        // Email and password of the application
        user: process.env.APP_EMAIL,
        pass: process.env.APP_PASSWORD
      }
    });

    let mailOptions = {
      from: '"nodejs-mailer project" <' + process.env.APP_EMAIL + '>',
      to: req.body.email, // user's email
      subject: 'Sending Email with `nodemailer`',
      html: `
        <h1>Details</h1>
        <p>Your Name: ${req.body.name}</p>
        <p>Your Role: ${req.body.role}</p>
        <p>Your Company: ${req.body.company}</p>
        <p>Your Email: ${req.body.email}</p>
        <h3>Your Message</h3>
        <p>${req.body.message}</p>
      `
    };

    transporter.sendMail(mailOptions, (err, info) => {
      if (err) return console.log(err);
      else return console.log('Email sent: ' + info.response);
    });

    res.render('contact', { msg: 'Email has been sent!' });
  });

module.exports = router;
