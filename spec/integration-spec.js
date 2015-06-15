var request = require('supertest');

var app = require('../app');


describe('GET /', function(){
	
	it(' should repsond with 200', function(done){
		request(app)
		.get('/')
		.expect(200)
		.end(function(err, res){
			detectError(err, done);
		});
	});
	
});

describe('GET api/', function(){
	describe('list', function(){
		it('should respond with json', function(done){
			request(app)
			.get('/api/list')
			.set('Accept', 'application/json')
			.expect(200)
			.expect('Content-Type', /json/)
			.end(function(err, res){
				detectError(err, done);
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