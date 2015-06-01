angular.module('app').controller('GroceryListController', function($scope){
	$scope.items = [
		{name : 'Eggs'},
		{name : 'Milk'},
		{name : 'Bread'}
	];
});