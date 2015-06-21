angular.module('app')
	.directive('itemForm', function(){
		return {
			restrict: 'E',
			templateUrl: 'item-form.html',
			controller: 'ItemController',
			scope: {
				name: '@',
				addItem: '&'
			}
		};
	});