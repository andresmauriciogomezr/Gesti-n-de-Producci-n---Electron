var app = angular.module('production-app', ['ngRoute']);

app.config(function($routeProvider){
	$routeProvider
	.when('/', {
		templateUrl : 'home.html'
	})
	.when('/products', {
		templateUrl : 'products.html'
	})

})