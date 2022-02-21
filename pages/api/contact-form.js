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

  await new Promise((resolve, reject) => {
  // verify connection configuration
    transporter.verify(function (error, success) {
      if (error) {
        console.log(error);
        reject(error);
      } else {
        console.log('Server is ready to take our messages');
        resolve(success);
      }
    });
  });

  const mailData = {
    from: '"Daniela Haerle" <info@mail.danielahaerle.ch>',
    to: 'hello@jeromehaas.ch', 
    subject: 'test', 
    text: 'test', 
    html: 'test', 
  };

  await new Promise((resolve, reject) => {
    // send mail
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

  // const dispatch = async ( data ) => {
  //   try {
  //     await transporter.sendMail({
  //       from: data.from,
  //       to: data.to, 
  //       subject: data.subject, 
  //       text: data.text, 
  //       html: data.html, 
  //     });
  //   } catch (error) {
  //     console.log(`🔴 Error: ${error.message}`);
  //   }
  // }

  // const createTemplates = async ( body ) => {
  //   console.log(path.resolve(process.cwd(), './public/email-templates'))
  //   try {
  //     let message; 
  //     message = await fs.readFileSync(path.resolve(process.cwd(), './public/email-templates/contact-form/message.html'), 'UTF-8');
  //     message = handlebars.compile(message);
  //     message = message({ 
  //       firstname: body.firstname,
  //       lastname: body.lastname,
  //       subject: body.subject,
  //       email: body.email,
  //       phone: body.phone,
  //       message: body.message,
  //     });
  //     let confirmation; 
  //     confirmation = await fs.readFileSync(path.resolve(process.cwd(), './public/email-templates/contact-form/confirmation.html'), 'UTF-8');
  //     confirmation = handlebars.compile(confirmation);
  //     confirmation = confirmation({ 
  //       firstname: body.firstname,
  //       lastname: body.lastname,
  //     });
  //     return {
  //       confirmation, 
  //       message
  //     }
  //   } catch (error) {
  //     console.log(`🔴 Error: ${error.message}`);
  //   }
  // }
	
// const ContactForm = async (req, res) => {
//   if (req.method === 'POST') {
//     try {
//       const body = req.body;
//       const { message, confirmation } = await createTemplates(body);	
//       dispatch({
//         from: process.env.NEXT_PUBLIC_SMTP_SENDER,
//         to: process.env.NEXT_PUBLIC_SMTP_USER,
//         subject: 'Eine neue Nachricht von der Website',
//         html: message,
//       });
//       dispatch({
//         from: process.env.NEXT_PUBLIC_SMTP_SENDER,
//         to: body.email,
//         subject: 'Vielen Dank für Ihre Nachricht',
//         html: confirmation,
//       });
//       res.status(200);
//       res.send('🟢 Success: Emails has been sent successfully!');			
//       console.log('🟢 Success: Emails has been sent successfully!');			
//     } catch (error) {
//       console.log(`🔴 Error: ${error.message}`);
//       res.status(404);
//       res.send(error);
//     }
//   }
}; 

export default ContactForm;