/// <reference path="../typings/jasmine/jasmine.d.ts"/>
var Browser = require('zombie');

describe('index', function(){
	
	var browser = new Browser();
	
	beforeEach(function(done){
		browser.visit('http://localhost:8080/', done);
	});
	
	it('should load', function(){
		browser.assert.success();		
	});
	
	it('grocery list should contain items', function(done){
		browser.fill('input[name=iName]', "fooo");
		browser.pressButton('input[value=add]', function(){
			browser.assert.text('li.item', "fooo");
			done();
		});
	});
});