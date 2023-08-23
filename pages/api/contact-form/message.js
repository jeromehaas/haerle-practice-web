// IMPORTS
const Nodemailer = require('nodemailer');
const { createMessage } = require('./templates/message');

// MESSAGE
const Message = async (req, res) => {

	// TRY-CATCH BLOCK
	try {

		// GET VALUES
		const { firstname, lastname, subject, email, phone, message } = req.body;

		// CREATE TRANSPORTER
		const transporter = Nodemailer.createTransport({
			host: process.env.SMTP_HOST,
			port: process.env.SMTP_PORT,
			secure: false,
			requireTLS: true,
			auth: {
				user: process.env.SMTP_USER,
				pass: process.env.SMTP_PASSWORD,
			},
			logger: false,
		});

		// CREATE TEMPLATE
		const messageTemplate = createMessage({
			firstname: firstname,
			lastname: lastname,
			subject: subject,
			email: email,
			phone: phone,
			message: message,
		});

		// CREATE DATA
		const messageData = {
			from: process.env.SMTP_SENDER,
			to: process.env.SMTP_RECEIVER,
			subject: 'Eine neue Nachricht von der Website',
			html: messageTemplate,
		};

		// SEND MESSAGE
		await transporter.sendMail(messageData);

		// PRINT SUCCESS MESSSAGE
		console.log('🟢 Success: Message has been sent successfully!');

		// SEND RESPONSE
		res.status(200).send('🟢 Success: Message has been sent successfully!');

	// HANDLE ERRORS
	} catch (error) {

		// PRINT SUCCESS MESSSAGE
		console.log('🔴 Error: Message could not be sent!');

		// SEND RESPONSE
		res.status(500).send('🔴 Error: Message could not be sent!');

	};

};

// EXPORTS
export default Message;
