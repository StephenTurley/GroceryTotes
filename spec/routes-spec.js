var request = require('request');

describe('server routes', function(){
    it('should return html on /', function(done){
        request('http://localhost:8080/', function(error, response, body){
            expect(body).toBeDefined();
            done();
        })
    });
});
