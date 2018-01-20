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

    $scope.movies = [];    

  $scope.movies = function(url) {
  $http({
	'method': 'GET',
	'url': 'https://api.themoviedb.org/3/movie/upcoming?api_key=9841b8703d599b55eb9c5377636d1e52&language=en-US&page=1',
	'headers': {},
    'data': {},
}).then(function (response) {
    var movies = response.data.outputs[0].data.concepts;
      var list = '';
      for (var i =0;i < movies.length;i++) {
          list += '<div class="movies">' + movies[i].name + '</div>'
      }
    console.log(list);
}, function (xhr) {
    console.log(xhr);
})}
})