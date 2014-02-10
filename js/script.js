// script.js

     // Create the module and name it myApp
	var myApp = angular.module('myApp', []);
     
     // Create the controller and inject Angular's $scope
	myApp.controller('mainController', function($scope) {
	     $scope.message = "Hello World!!! This message is generated from the controller.";
	});

	myApp.controller('aboutController', function($scope) {
             $scope.message = "About Page... Hello World!!! ";
        });

	myApp.controller('contactController', function($scope) {
             $scope.message = "Contact us!!! Hello World!!!";
        });
