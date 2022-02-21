const { messageTemplate } = require('./message-template');
const handlebars = require('handlebars');

const createMessage = ( data ) => {
	let message;
	message = handlebars.compile(messageTemplate);
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
	createMessage
};