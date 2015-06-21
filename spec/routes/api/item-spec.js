/// <reference path="../../../typings/jasmine/jasmine.d.ts"/>
var proxyquire = require('proxyquire');
var itemObj = { name: 'foo' };

var mockDb = {
	addItem: function(item, callback){
		callback(item);
	},
	getList: function(){
		return [itemObj];
	}
};

var item =proxyquire('../../../routes/api/item', {'../../db': mockDb});

var mockReq = {
	body: itemObj
};

var mockRes = {
    setHeader : function(){},
    send : function(item){}
};


describe('list item', function(){
	
	beforeEach(function(){
		
	});
    
    describe('addItem', function(){
		it('should be a function', function(){
			expect(item.addItem).toBeFunction();
		});
		
		it('should pass req body to db.addItem', function(){
			spyOn(mockDb, 'addItem').and.callThrough();
			
			item.addItem(mockReq, mockRes);
			
			expect(mockDb.addItem.calls.mostRecent().args[0]).toBe(itemObj);
		});
		
		it('should set header to json', function(){
			spyOn(mockRes, 'setHeader');
			
			item.addItem(mockReq, mockRes);
			
			expect(mockRes.setHeader).toHaveBeenCalledWith('Content-Type', 'application/json');
		});
		
		it('should respond with item added', function(done){
			spyOn(mockRes, 'send').and.callFake(done);
			
			item.addItem(mockReq, mockRes);
			
			expect(mockRes.send).toHaveBeenCalledWith(itemObj);
		});
	});
});