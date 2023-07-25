const Nodemailer = require('nodemailer');
const { createConfirmation } = require('./templates/confirmation');

// CONFIRMATION
const Confirmation = async (req, res) => {

	// TRY-CATCH BLOCK
	try {

		// GET VALUES
		const { firstname, lastname, email } = req.body;

		// CREATE TEMPLATE
		const confirmationTemplate = createConfirmation({
			firstname: firstname,
			lastname: lastname,
			email: email,
		});

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

		// CREATE DATA
		const confirmationData = {
			from: process.env.SMTP_SENDER,
			to: email,
			subject: 'Ihre Nachricht wurde übermittelt',
			html: confirmationTemplate,
		};

		// SEND MESSAGE
		await transporter.sendMail(confirmationData);

		// PRINT SUCCESS MESSSAGE
		console.log('🟢 Success: Confirmation has been sent successfully!');

		// SEND RESPONSE
		res.send('🟢 Success: Confirmation has been sent successfully!');

	// HANDLE ERRORS
	} catch (error) {

		// PRINT SUCCESS MESSSAGE
		console.log('🔴 Error: Message could not be sent!');

		// SEND RESPONSE
		res.status(500).send('🔴 Error: Message could not be sent!');

	};

};

export default Confirmation;
