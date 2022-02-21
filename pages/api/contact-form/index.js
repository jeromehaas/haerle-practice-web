const Nodemailer = require('nodemailer');
import { createTemplate } from './templates/confirmation';

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

	const template = createTemplate({
		firstname: "Firstname",
		lastname: "Lastname",
		subject: "Subject",
		email: "Email",
		phone: "Phone",
		message: "Message",
	});

  const mailData = {
    from: '"Daniela Haerle" <info@mail.danielahaerle.ch>',
    to: 'hello@jeromehaas.ch', 
    subject: 'test', 
    text: 'test', 
    html: template, 
  };

  await new Promise((resolve, reject) => {
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