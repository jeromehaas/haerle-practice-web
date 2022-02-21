const Nodemailer = require('nodemailer');
import { createConfirmation } from './templates/confirmation';
import { createMessage } from './templates/message';

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

	const { firstname, lastname, subject, email, phone, message } = req.body;

	const template = createMessage({
		firstname: firstname,
		lastname: lastname,
		subject: subject,
		email: email,
		phone: phone,
		message: message,
	});

  const mailData = {
		from: process.env.NEXT_PUBLIC_SMTP_SENDER,
		to: process.env.NEXT_PUBLIC_SMTP_USER,
		subject: 'Eine neue Nachricht von der Website',
    html: template, 
  };

  await new Promise((resolve, reject) => {
    transporter.sendMail(mailData, (err, info) => {
      if (err) {
        console.error(err);
        reject(err);
        res.send(err.message)
      } else {
        resolve();
				console.log('🟢 Success: Emails has been sent successfully!');	
				res.send('🟢 Success: Emails has been sent successfully!');	
      }
    });
  });

}; 

export default ContactForm;