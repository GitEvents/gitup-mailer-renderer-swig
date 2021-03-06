'use strict';

var chai = require('chai');
var renderer = require('../lib');

describe ('renderer', function(){
	var expect = chai.expect;
	var templateString = "Hi {{fname}} {{sname}}, This is the good.";
    
    describe('succeeds when', function(){
    	var templateRenderer = null;
  		
  		before(function(){
			templateRenderer = renderer(templateString, {fname: 'G'});
		});

		describe('no data provided', function(){
			var resultHtml = null;
			before(function(){
				resultHtml = templateRenderer({sname: 'Gajjar'});
			});

			it('should use the locals', function(){
				expect(resultHtml).to.equal("Hi G Gajjar, This is the good.")
			});
		});

		describe('data is provided', function(){
			var resultHtml = null;
			before(function(){
				resultHtml = templateRenderer({fname: 'Gaurav', sname: 'Gajjar'});
			});

			it('should use data', function(){
				expect(resultHtml).to.equal("Hi Gaurav Gajjar, This is the good.");
			});
		});
    });

    describe('fails when', function(){
    	it('initialize without templateString', function(){
			expect(renderer).to.throw('templateString parameter is required');
		});
	});
});