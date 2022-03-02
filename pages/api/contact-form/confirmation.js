const Nodemailer = require('nodemailer');
import { createConfirmation } from './templates/confirmation';

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

const Confirmation = async ( req, res ) => {

	const { firstname, lastname, email } = req.body;

	const confirmationTemplate = createConfirmation({
		firstname: firstname,
		lastname: lastname,
		email: email
	});

  const confirmationData = {
		from: process.env.NEXT_PUBLIC_SMTP_SENDER,
		to: email,
		subject: 'Ihre Nachricht wurde übermittelt',
    html: confirmationTemplate, 
  };


  await new Promise((resolve, reject) => {
    transporter.sendMail(confirmationData, (error) => {
      if (error) {
        console.error(error);
        reject(error);
        res.send(error.message);
      } else {
        resolve();
      }
    });
  }).then(() => {
		console.log('🟢 Success: Confirmation has been sent successfully!');
		res.send('🟢 Success: Confirmation has been sent successfully!');
	});
 
}; 

export default Confirmation;