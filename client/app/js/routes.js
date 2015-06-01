angular.module('app').config(function( $routeProvider, $locationProvider ) {
	$locationProvider.html5Mode({ enabled: true });
	
	$routeProvider.when('/', {
	    templateUrl: 'grocery-list.html',
		controller: 'GroceryListController'
	  });
});