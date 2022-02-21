const { confirmationTemplate } = require('./confirmation-template.js');
const handlebars = require('handlebars');

const createConfirmation = ( data ) => {
	let confirmation;
	confirmation = handlebars.compile(confirmationTemplate);
	confirmation = message({ 
		firstname: data.firstname,
		lastname: data.lastname,
		subject: data.subject,
		email: data.email,
		phone: data.phone,
		message: data.message,
	});
	return confirmation;
};

module.exports = {
	createConfirmation
};