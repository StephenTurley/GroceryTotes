var item = require('../../../routes/api/item');

var mockReq = {};
var mockRes = {
    setHeader : function(){},
    send : function(){}
};

describe('list item', function(){
    
    describe('addItem', function(){
		it('should be a function', function(){
			expect(item.addItem).toBeFunction();
		});
	});
});