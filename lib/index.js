'use strict';
var swig = require('swig');

module.exports = renderer;

function render(template, data) {
 return template(data);
}

function renderer(templateString, locals){
	if (typeof templateString !== 'string'){
		throw new Error('templateString parameter is required'); 
	}

	swig.setDefaults({
		locals: locals
	});
	var comipledTemplate = swig.compile(templateString);
	return render.bind(null, comipledTemplate);
}