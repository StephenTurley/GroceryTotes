describe('directives', function() {
  var $compile;
  var $rootScope;
  var $httpBackend;
 
  beforeEach(module('app'));
  
  beforeEach(inject(function(_$compile_, _$rootScope_, _$httpBackend_){
    $compile = _$compile_;
    $rootScope = _$rootScope_;
	$httpBackend = _$httpBackend_;
  }));
  
  describe('add-item', function(){
	  
	  it('render the template', function() {
	    var element = $compile('<item-form></item-form>')($rootScope);
	    
	    $rootScope.$digest();
	    
	    expect(element.html()).toContain('test');
	  });
  });
});