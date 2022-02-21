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

const createMessage = ( body ) => {

	const messageData = {
  	from: '"Daniela Haerle" <info@mail.danielahaerle.ch>',
    to: 'info@danielahaerle.ch',
    subject: 'Eine neue Nachricht von der Website',
		html: '<h1>hello message</h1>', 
	};

	return messageData;

}

const createConfirmation = ( body ) => {
	
	const confirmationData = {
  	from: '"Daniela Haerle" <info@mail.danielahaerle.ch>',
    to: 'hello@jeromehaas.ch',
    subject: 'Vielen Dank für Ihre Nachricht',
		html: '<h1>hello message</h1>', 
	};

	return confirmationData;

}

const serverCheck = () => {
	transporter.verify((error) => {
		if (error) {
			console.log(`🔴 Error: ${error.message}`);
			throw new Error(error);
		} else {
			console.log('🟢 Success: Server is ready to take our messages');
		}
	});
}


const ContactForm = async( req, res ) => {

	await new Promise((resolve, reject) => {
	
		serverCheck();
		const body = req.body; 
		const messageData = createMessage(body);	
		const confirmationData = createConfirmation(body);

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

	}).catch((error) => {
		console.log(`🔴 Error: ${error.message}`);
	});

	res.send('🟢 Success: Confirmation email has been sent successfully!');

}; 

export default ContactForm;