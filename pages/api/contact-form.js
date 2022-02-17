const Nodemailer = require('nodemailer');
const fs = require('fs');
const handlebars = require('handlebars');

const transporter = Nodemailer.createTransport({
  host: 'mail.cyon.ch',
  port: 587,
  secure: false,
  requireTLS: true,
  auth: {
    user: 'info@danielahaerle.ch',
    pass: 'Nd90#P8iNGz8',
  },
  logger: false
});

const dispatch = async ( data ) => {
  try {
    await transporter.sendMail({
      from: data.from,
      to: data.to, 
      subject: data.subject, 
      text: data.text, 
      html: data.html, 
    });
  } catch (error) {
    console.log(`🔴 Error: ${error.message}`);
  }
}

const createTemplates = async ( body ) => {
  try {
    let message; 
    message = await fs.readFileSync('public/email-templates/contact-form/message.html', 'UTF-8');
    message = handlebars.compile(message);
    message = message({ 
      firstname: body.firstname,
      lastname: body.lastname,
      subject: body.subject,
      email: body.email,
      phone: body.phone,
      message: body.message,
    });
    let confirmation; 
    confirmation = await fs.readFileSync('public/email-templates/contact-form/confirmation.html', 'UTF-8');
    confirmation = handlebars.compile(confirmation);
    confirmation = confirmation({ 
      firstname: body.firstname,
      lastname: body.lastname,
    });
    return {
      confirmation, 
      message
    }
  } catch (error) {
    console.log(`🔴 Error: ${error.message}`);
  }
}
	
const ContactForm = async (req, res) => {
  if (req.method === 'POST') {
    try {
      const body = req.body;
      const { message, confirmation } = await createTemplates(body);	
      dispatch({
        from: '"Daniela Haerle" <info@mail.danielahaerle.ch>',
        to: 'info@danielahaerle.ch',
        subject: 'Eine neue Nachricht von der Website',
        html: message,
      });
      dispatch({
        from: '"Daniela Haerle" <info@mail.danielahaerle.ch>',
        to: body.email,
        subject: 'Vielen Dank für Ihre Nachricht',
        html: confirmation,
      });
      res.status(200);
      res.send('🟢 Success: Emails has been sent successfully!');			
      console.log('🟢 Success: Emails has been sent successfully!');			
    } catch (error) {
      console.log(`🔴 Error: ${error.message}`);
      res.status(404);
      res.send(error);
    }
  }
}; 

export default ContactForm;