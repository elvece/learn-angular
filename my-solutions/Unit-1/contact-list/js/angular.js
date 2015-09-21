// sample angular code

var app = angular.module('myApp', []);

app.controller('myController', function($scope) {
  $scope.contact = {
    name: "",
    email: "",
    phone: "",
  };
});
