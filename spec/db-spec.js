var db = require('../db');

describe('db', function(){
	var item = { name: 'foo' };
	
	afterEach(function(){
		db.dropCollection();
	});
	
	describe('getList', function(){
		it('should be a function', function(){
			expect(db.getList).toBeFunction();
		});
		
		it('should return an empty Array', function(){
			var result = db.getList();
			
			expect(result).toEqual([]);
		});
	});
	
	describe('addItem', function(){
		it('should be a function', function(){
			expect(db.addItem).toBeFunction();
		});
		
		it('should add item to list', function(){
			db.addItem(item);
			
			var list = db.getList();
			
			expect(list).toContain(item);
			expect(list.length).toBe(1);
		});
	});
	
	describe('dropCollection', function(){
		it('should be a function', function(){
			expect(db.dropCollection).toBeFunction();
		});
		
		it('should reset list to empty array', function(){
			db.addItem(item);
			
			db.dropCollection();
			
			var list = db.getList();
			
			expect(list.length).toBe(0);
		});
	});
	
});