var app = angular.module('presApp', ['ngRoute']);
// this is sourced in our html 'angular-route'. ng-route is the name of the package.

app.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider){
  $routeProvider
    .when('/', {
      templateUrl: 'views/home.html', // a 'partial' is just grabbing html elements, not a full file.
      controller: 'HomeController',
      controllerAs: 'home' // the controller that will control the content we grab.
    })
    .when('/hillary', {
      templateUrl: 'views/hillary.html',
      controller: 'HillaryController',
      controllerAs: 'hillary'
    })
    .when('/bernie', {
      templateUrl: 'views/bernie.html',
      controller: 'BernieController',
      controllerAs: 'bernie'
    })
    .when('/ted', {
      templateUrl: 'views/ted.html',
      controller: 'TedController',
      controllerAs: 'ted'
    })

    $locationProvider.html5Mode(true); //this allows us to take out the # in our html, need to add a companion base href in the index.html for it to function

}])

app.controller('HomeController', function(){
  this.message = "Home screen content of app here";
})

app.controller('HillaryController', function(){
  this.message = "Hillary 4 Prez";

})

app.controller('BernieController', function(){
  this.message = "Bernie 4 Prez";

})

app.controller('TedController', function(){
  this.message = "Ted 4 Prez";

})

app.controller('MainController', function(){

})
