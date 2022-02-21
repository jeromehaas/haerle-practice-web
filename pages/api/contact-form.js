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

	let messageTemplate; 
	messageTemplate = fs.readFileSync(path.resolve(process.cwd(), './public/email-templates/contact-form/message.html'), 'UTF-8');
	messageTemplate = handlebars.compile(messageTemplate);
	messageTemplate = messageTemplate({ 
		firstname: body.firstname,
		lastname: body.lastname,
		subject: body.subject,
		email: body.email,
		phone: body.phone,
		message: body.email,
	});

	const messageData = {
  	from: process.env.NEXT_PUBLIC_SMTP_SENDER,
    to: process.env.NEXT_PUBLIC_SMTP_USER,
    subject: 'Eine neue Nachricht von der Website',
		html: '<h1>hello message</h1>', 
	};

	return messageData;

}

const createConfirmation = ( body ) => {
	
	let confirmationTemplate; 
	confirmationTemplate = fs.readFileSync(path.resolve(process.cwd(), './public/email-templates/contact-form/confirmation.html'), 'UTF-8');
	confirmationTemplate = handlebars.compile(confirmationTemplate);
	confirmationTemplate = confirmationTemplate({ 
		firstname: body.firstname,
		lastname: body.lastname,
		subject: body.subject,
		email: body.email,
		phone: body.phone,
		message: body.email,
	});

	const confirmationData = {
  	from: process.env.NEXT_PUBLIC_SMTP_SENDER,
    to: body.email,
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