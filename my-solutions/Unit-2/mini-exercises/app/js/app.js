var app = angular.module('myApp', ['ngRoute']);

app.config(function($routeProvider, $locationProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'partials/home.html',
      controller: 'homeController'
    })
    .when( '/bio', {
      templateUrl: 'partials/bio.html',
      controller: 'bioController'
    })
    .when( '/resume', {
      templateUrl: 'partials/resume.html',
      controller: 'resumeController'
    })
    .when( '/projects', {
      templateUrl: 'partials/projects.html',
      controller: 'projectsController'
    })
    .when( '/add', {
      templateUrl: 'partials/add.html',
      controller: 'addController'
    })
    .when( '/add/:num1/:num2', {
      templateUrl: 'partials/add.html',
      controller: 'addController'
    })
   .otherwise({ redirectTo: '/'});
   // use the HTML5 History API
    $locationProvider.html5Mode(true);
 });
