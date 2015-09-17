var app = angular.module('madLibs', []);

var mainController = function($scope){
  $scope.madLibs = {
    // boysName: "",
    // adjective: "",
    // pluralNoun: "",
    // pluralInsect: "",
    // pluralNounTwo: "",
    // pluralNounThree: "",
    // sVerb: ""
    //or can do function init() to reset it to these clear values
  };
};

app.controller('mainController', ['$scope', mainController]);
