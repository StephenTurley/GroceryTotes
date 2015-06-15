var list = require('../../../routes/api/list');

var mockReq = {};
var mockRes = {
    setHeader : function(){},
    send : function(){}
};

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
        
        it('should respond with a list of 3 items', function(){
            spyOn(mockRes, 'send');
            
            list.getList(mockReq, mockRes);
            
            var responseJson = mockRes.send.calls.mostRecent().args[0];

            expect(responseJson.length).toBe(3);
        });
    });
});