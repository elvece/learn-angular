angular.module('myapp', ["ngSanitize"]);

var mainControllerFunction = function($scope) {
  $scope.names = ["Harry", "Ron", "Hermione", "Sirius", "Hedwig", "Tonks"];
  $scope.symbols = ["&spades;", "&clubs;", "&hearts;", "&diams;"];
  $scope.numbers = [1,1,2,5,6,9,9,9];
  $scope.places = {
    name: "Illegal Petes",
    location: "Broadway"
  };
};


angular.module('myapp')
  .controller('mainController', ['$scope', mainControllerFunction]);

