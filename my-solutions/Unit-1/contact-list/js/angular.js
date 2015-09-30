
var app = angular.module('myApp', []);

app.controller('myController', function($scope) {
  $scope.contacts = [];
  $scope.contact = {};
  $scope.addContact = function(){
    $scope.contacts.push($scope.contact);
  };

});

