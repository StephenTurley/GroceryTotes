/// <reference path="../typings/jasmine/jasmine.d.ts"/>
var request = require('supertest');

var app = require('../app');


describe('/', function(){
	
	it('should repsond with 200', function(done){
		request(app)
		.get('/')
		.expect(200)
		.end(function(err, res){
			detectError(err, done);
		});
	});
	
});

describe('api/', function(){
	describe('list/', function(){
		it('GET should respond with json and 200', function(done){
			request(app)
			.get('/api/list')
			.set('Accept', 'application/json')
			.expect(200)
			.expect('Content-Type', /json/)
			.end(function(err, res){
				detectError(err, done);
			});
		});
		describe('item/', function(){
			xit('POST should resopond with item added and 200', function(done){
				request(app)
				.post('/api/item', { name: 'foo'})
				.set('Accept', 'application/json')
				.expect(200)
				.expect({ name: 'foo'})
				.end(function(err, res){
					detectError(err, done);
				});
			});
		});
	});
});

function detectError(err, done) {
	if(err){
		done.fail(err);
	} else {
		done();
	}
}