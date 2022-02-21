const { template } = require('./confirmation-template.js');
const handlebars = require('handlebars');

const createTemplate = ( data ) => {

	let message;
	message = handlebars.compile(template);
	message = message({ 
		firstname: data.firstname,
		lastname: data.lastname,
		subject: data.subject,
		email: data.email,
		phone: data.phone,
		message: data.message,
	});
	return message;

};

module.exports = {
	createTemplate
};