// IMPORTS
const handlebars = require('handlebars');
const { confirmationTemplate } = require('./confirmation-template.js');

// CREATE CONFIRMATION FORM
const createConfirmation = (data) => {
	let confirmation;
	confirmation = handlebars.compile(confirmationTemplate);
	confirmation = confirmation({
		firstname: data.firstname,
		lastname: data.lastname,
	});
	return confirmation;
};

// EXPORTS
module.exports = {
	createConfirmation,
};
