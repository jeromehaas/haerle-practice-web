const Nodemailer = require('nodemailer');
const fs = require('fs');
const handlebars = require('handlebars');
const path = require('path');

const transporter = Nodemailer.createTransport({
  host: process.env.NEXT_PUBLIC_SMTP_HOST,
  port: process.env.NEXT_PUBLIC_SMTP_PORT,
  secure: false,
  requireTLS: true,
  auth: {
    user: process.env.NEXT_PUBLIC_SMTP_USER,
    pass: process.env.NEXT_PUBLIC_SMTP_PASSWORD,
  },
  logger: false
});

const ContactForm = async ( req, res ) => {

	const mailData = {
		from: '"Daniela Haerle" <info@mail.danielahaerle.ch>',
		to: 'hello@jeromehaas.ch', 
		subject: 'test', 
		text: 'test', 
		html: '<h1>test</h1>', 
	};

	await new Promise((resolve, reject) => {
   
		transporter.verify(function (error, success) {
      if (error) {
        console.log(error);
        reject(error);
      } else {
        console.log('Server is ready to take our messages');
        resolve(success);
      }
    });

    transporter.sendMail(mailData, (err, info) => {
      if (err) {
        console.error(err);
        reject(err);
        res.send(err.message)
      } else {
        console.log(info);
        resolve(info);
        res.send('ok');
      }
    });
		
  });

}; 

export default ContactForm;