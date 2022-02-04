const mailgun = require('mailgun-js');
const mg = mailgun({
  apiKey: process.env.NEXT_PUBLIC_MG_API_KEY, 
  domain: process.env.NEXT_PUBLIC_MG_DOMAIN_NAME,
  host: process.env.NEXT_PUBLIC_MG_HOST
});

const sendEmails = (body) => {

  // DEFINE EMAIL OPTIONS FOR THE MESSAGE
  const messageData = { 
    from: 'info@mail.danielahaerle.ch',
    to: 'info@danielahaerle.ch',
    subject: body.subject,
    template: 'contact-form-message',
    text: 'Find the latest development on the crypto portfolio',
    'v:firstname': body.firstname,
    'v:lastname': body.lastname,
    'v:phone': body.phone,
    'v:email': body.email,
    'v:subject': body.subject,
    'v:message': body.message,
  };
 
  // DEFINE EMAIL OPTIONS FOR THE CONFIRMATION
  const confirmationData = { 
    from: 'info@mail.danielahaerle.ch',
    to: body.email,
    subject: body.subject,
    template: 'contact-form-confirmation',
    text: 'Find the latest development on the crypto portfolio',
    'v:firstname': body.firstname,
    'v:lastname': body.lastname,
  };
	
  // DISPATCH MAIL WITH MESSAGE
  mg.messages().send(messageData, function (error) {
    if (error) throw new Error(`🔴 Error: ${error.message}`)
    console.log(`📗 Success: email with message has been dispatched to ${messageData.to}!`);
  });
	
  // DISPATCH MAIL WITH CONFIRMATION
  mg.messages().send(confirmationData, function (error) {
    if (error) throw new Error(`🔴 Error: ${error.message}`)
    console.log(`📗 Success: email with confirmation has been dispatched to ${messageData.to}!`);
  });

}


const ContactForm = async (req, res) => {
	
  if (req.method === 'POST') {

    try {
      const body = req.body;
      // await sendEmails(body);
      console.log(body)
      res.send('🟢 Success: Emails has been sent successfully!');			
    } catch (error) {
      console.log(`🔴 Error: ${error.message}`);
      res.status(404);
    }

  }

}; 

export default ContactForm;