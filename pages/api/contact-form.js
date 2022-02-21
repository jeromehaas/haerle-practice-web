const Nodemailer = require('nodemailer');
const fs = require('fs');
const handlebars = require('handlebars');
const path = require('path');


const ContactForm = async( req, res ) => {

	await new Promise((resolve, reject) => {
	
		const transporter = Nodemailer.createTransport({
			host: process.env.NEXT_PUBLIC_SMTP_HOST,
			port: process.env.NEXT_PUBLIC_SMTP_PORT,
			secure: true,
			requireTLS: true,
			auth: {
				user: process.env.NEXT_PUBLIC_SMTP_USER,
				pass: process.env.NEXT_PUBLIC_SMTP_PASSWORD,
			},
			logger: false
		});

		transporter.verify((error) => {
			if (error) {
				console.log(`🔴 Error: ${error.message}`);
				throw new Error(error);
			} else {
				console.log('🟢 Success: Server is ready to take our messages');
			}
		});
		
		const messageData = {
			from: '"Daniela Haerle" <info@mail.danielahaerle.ch>',
			to: 'info@danielahaerle.ch',
			subject: 'Eine neue Nachricht von der Website',
			text: 'text',
			html: '<h1>hello message</h1>', 
		};

		const confirmationData = {
			from: '"Daniela Haerle" <info@mail.danielahaerle.ch>',
			to: 'hello@jeromehaas.ch',
			subject: 'Vielen Dank für Ihre Nachricht',
			text: 'text',
			html: '<h1>hello message</h1>', 
		};

		transporter.sendMail(messageData, (error) => {
			if (error) {
				console.error(error);
				reject(error);
			} else {
				console.log('🟢 Success: Message email has been sent successfully!');
			}
		});
		
		transporter.sendMail(confirmationData, (error) => {
			if (error) {
				console.error(error);
				reject(error);
			} else {
				console.log('🟢 Success: Confirmation email has been sent successfully!');	
			}
		});

		resolve();
		res.send('🟢 Success: Confirmation email has been sent successfully!');
		
	}).catch((error) => {
		console.log(`🔴 Error: ${error.message}`);
		res.send(`🔴 Error: ${error.message}`);
	});


}; 

export default ContactForm;