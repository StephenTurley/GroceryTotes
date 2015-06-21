var proxyquire = require('proxyquire');
var mockDb;

var mockReq = {};
var mockRes = {
    setHeader : function(){},
    send : function(){}
};

var mockList = [
    { name: 'foo' },
    { name: 'bar' }
]

mockDb = {
	addItem: function(item, callback){
		callback(item);
	},
	getList: function(){
		return mockList;
	}
};

var list = proxyquire('../../../routes/api/list', {'../../db': mockDb });

describe('list api', function(){
    
    describe('getList', function(){
        
        it('should be a function', function(){
            expect(list.getList).toBeFunction();
        });
        
        it('should return json', function(){
            spyOn(mockRes, 'setHeader');
            
            list.getList(mockReq, mockRes);
            
            expect(mockRes.setHeader).toHaveBeenCalledWith('Content-Type', 'application/json');
        });
        
        it('should response from db getList', function(done){
            spyOn(mockRes, 'send').and.callFake(done);
            
            list.getList(mockReq, mockRes);
            
            expect(mockRes.send).toHaveBeenCalledWith(mockList);
        });
    });
});