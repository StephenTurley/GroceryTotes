var api = require('../../../routes/api/api');
var list = require('../../../routes/api/list');

describe('api', function(){
	
	it('should contain list endpoints', function(){
		expect(api.list).toBe(list);
	});
});