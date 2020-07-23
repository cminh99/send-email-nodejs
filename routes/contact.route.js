require('dotenv').config();
const nodemailer = require('nodemailer');
const router = require('express').Router();

router.get('/', (req, res) => res.render('contact'));

router.post('/', (req, res) => {
	var transporter = nodemailer.createTransport({
		service: 'gmail',
		auth: {
			user: process.env.EMAIL, // Email and password of the application
			pass: process.env.PASSWORD
		}
	});

	var mailOptions = {
		from: '"Domain Name Of The Application" <' + process.env.EMAIL + '>',
		to: process.env.RECEIVER_EMAIL,
		subject: 'Contact (test nodemailer)',
		html: `
			<h3>Details</h3>
			<p>Name: ${req.body.name}</p>
			<p>Company: ${req.body.company}</p>
			<p>Email: ${req.body.email}</p>
			<p>Phone: ${req.body.phone}</p>
			<h3>Message</h3>
			<p>${req.body.message}</p>
		`
	};

	transporter.sendMail(mailOptions, (err, info) => {
		if(err) return console.log(err);
		else return console.log('Email sent: ' + info.response);
	});

	res.render('contact', { message: 'Email has been sent!' });
});

module.exports = router;