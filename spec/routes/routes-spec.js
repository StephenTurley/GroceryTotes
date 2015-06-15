var routes = require('../../routes');
require('jasmine-expect');

var mockReq = {};

var mockRes = {
    render : function(path) { return path; }
};

describe('routes', function() {
    describe('index', function(){
        
        it('should be a function', function(){
            expect(routes.index).toBeFunction();
        });
        
        it('should render index.html', function(){
            spyOn(mockRes,'render');
            
            routes.index(mockReq, mockRes);
            
            expect(mockRes.render).toHaveBeenCalledWith('index.html');
            
        });
       
    });
    
});
