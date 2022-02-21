const Nodemailer = require('nodemailer');
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

const Message = async ( req, res ) => {

	const { firstname, lastname, subject, email, phone, message } = req.body;

	const messageTemplate = createMessage({
		firstname: firstname,
		lastname: lastname,
		subject: subject,
		email: email,
		phone: phone,
		message: message,
	});

  const messageData = {
		from: process.env.NEXT_PUBLIC_SMTP_SENDER,
		to: process.env.NEXT_PUBLIC_SMTP_USER,
		subject: 'Eine neue Nachricht von der Website',
    html: messageTemplate, 
  };

  await new Promise((resolve, reject) => {
    transporter.sendMail(messageData, (error) => {
      if (error) {
        console.error(error);
        reject(error);
        res.send(error.message);
      } else {
        resolve();
      }
    });
  }).then(() => {
		console.log('🟢 Success: Message has been sent successfully!');
		res.send('🟢 Success: Message has been sent successfully!');
	});
 
}; 

export default Message;