var api = require('../../../routes/api/api');
var list = require('../../../routes/api/list');
var item = require('../../../routes/api/item');


describe('api', function(){
	
	it('should contain list endpoints', function(){
		expect(api.list).toBe(list);
	});
	
	it('should contain item endpoints', function(){
		expect(api.item).toBe(item);
	});
});