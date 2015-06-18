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
});