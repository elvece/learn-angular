
var app = angular.module('myApp', []);

app.controller('myController', function($scope) {
  $scope.contacts = [];
  $scope.contact = {};
  $scope.addContact = function(){
    $scope.contacts.push($scope.contact);

  };

});

//on click of add contact
//grab values from form
//add them to table
//run function that adds to table
