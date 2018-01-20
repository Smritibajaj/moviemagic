var movieMania = angular.module('movieMania',['ngRoute']);
movieMania.config(function ($routeProvider) {
	$routeProvider
	.when('/',{
		templateUrl: 'pages/login.html',
		controller: 'loginController'
	})
    .when('/action',{
		templateUrl: 'pages/action.html',
		controller: 'mainController'
    })
    .when('/comedy',{
		templateUrl: 'pages/comedy.html',
		controller: 'mainController'
    })
    .when('/thriller',{
		templateUrl: 'pages/thriller.html',
		controller: 'mainController'
    })
    .when('/romance',{
		templateUrl: 'pages/romance.html',
		controller: 'mainController'
    })
    
})
movieMania.controller('loginController',function($scope, $location) {
    $scope.goToAction = function() {
        //console.log('Do Something')
        $location.url('action')
    }
    $scope.goToComedy = function() {
        //console.log('Do Something')
        $location.url('comedy')
    }
    $scope.goToThriller = function() {
        //console.log('Do Something')
        $location.url('thriller')
    }
    $scope.goToRomance = function() {
        //console.log('Do Something')
        $location.url('romance')
    }


})
angular.module('MyApp',['ngMaterial', 'ngMessages', 'material.svgAssetsCache'])

.controller('AppCtrl', function($scope) {
  $scope.imagePath = 'image1.jpeg';
})

