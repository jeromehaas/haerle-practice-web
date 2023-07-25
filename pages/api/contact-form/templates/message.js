// IMPORTS
const handlebars = require('handlebars');
const { messageTemplate } = require('./message-template');

// CREATE MESSAGE
const createMessage = (data) => {
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

// EXPORTS
module.exports = {
	createMessage,
};
