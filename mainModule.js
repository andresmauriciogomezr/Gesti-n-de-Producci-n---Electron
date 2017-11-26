var app = angular.module('production-app', ['ngRoute']);

app.config(function($routeProvider){
	$routeProvider
	.when('/', {
		templateUrl : 'views/production/production.html'
	})
	.when('/production', {
		templateUrl : 'views/production/production.html'
	})
	.when('/store', {
		templateUrl : 'views/store/store.html'
	})

})

app.controller("mainController", function(){
	
})