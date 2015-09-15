var app = angular.module('madLibs', []);

var mainController = function($scope){
  $scope.madLibs = {
    boysName: "",
    adjective: "",
    pluralNoun: "",
    pluralInsect: "",
    pluralNounTwo: "",
    pluralNounThree: "",
    sVerb: ""
  };
};

app.controller('mainController', ['$scope', mainController]);
