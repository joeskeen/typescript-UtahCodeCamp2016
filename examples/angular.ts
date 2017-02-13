//⁄ <reference path="../typings/main.d.ts" />
//⁄ <reference path="myService.ts" />

angular.module('myModule')
	.controller('MyController', ['$scope', '$http', 'myService',
	function($scope: angular.IScope, 
			 $http: angular.IHttpService, 
			 myService: demo.IMyService) {
		myService.
	}]);