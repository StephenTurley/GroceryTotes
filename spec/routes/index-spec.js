var index = require('../../routes/index');
require('jasmine-expect');

var mockReq = {};

var mockRes = {
    render : function(path) { return path; }
};


describe('index route', function(){
    
    it('should be a function', function(){
        expect(index.get).toBeFunction();
    });
    
    it('should render index.html', function(){
        spyOn(mockRes,'render');
        
        index.get(mockReq, mockRes);
        
        expect(mockRes.render).toHaveBeenCalledWith('index.html');
        
    });
});
        

