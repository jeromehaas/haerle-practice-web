const { confirmationTemplate } = require('./confirmation-template.js');
const handlebars = require('handlebars');

const createConfirmation = ( data ) => {
	let confirmation;
	confirmation = handlebars.compile(confirmationTemplate);
	confirmation = confirmation({ 
		firstname: data.firstname,
		lastname: data.lastname
	});
	return confirmation;
};

module.exports = {
	createConfirmation
};