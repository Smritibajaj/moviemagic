var movieMania = angular.module('movieMania',['ngRoute', 'ngMaterial', 'ngMessages', 'material.svgAssetsCache']);
movieMania.config(function ($routeProvider) {
	$routeProvider
	.when('/',{
		templateUrl: 'pages/login.html',
		controller: 'loginController'
	})
    .when('/action',{
		templateUrl: 'pages/action.html',
		controller: 'actionController'
    })
    .when('/comedy',{
		templateUrl: 'pages/comedy.html',
		controller: 'comedyController'
    })
    .when('/thriller',{
		templateUrl: 'pages/thriller.html',
		controller: 'thrillerController'
    })
    .when('/romance',{
		templateUrl: 'pages/romance.html',
		controller: 'romanceController'
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

movieMania.controller('thrillerController',function($scope,$routeParams,$http){
  })

movieMania.controller('comedyController',function($scope,$routeParams,$http){
    
  })

movieMania.controller('romanceController',function($scope,$routeParams,$http){
    
  })

  movieMania.controller('actionController',function($scope, $routeParams, $http){
      
  })