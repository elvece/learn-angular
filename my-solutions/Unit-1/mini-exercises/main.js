var app = angular.module('myapp', ["ngSanitize"]);

var mainControllerFunction = function($scope) {
  $scope.name = "Severus Snape";
  $scope.names = ["Harry", "Ron", "Hermione", "Sirius", "Hedwig", "Tonks"];
  $scope.symbols = ["&spades;", "&clubs;", "&hearts;", "&diams;"];
  $scope.numbers = [1,1,2,5,6,9,9,9];
  $scope.places = {
    name: "Illegal Petes",
    location: "Broadway"
  };
  $scope.cameras = [
    {
      title: "Nikon D3100 DSLR",
      image: "http://ecx.images-amazon.com/images/I/713u2gDQqML._SX522_.jpg",
      rating: 3.4,
      price: 369.99,
      onSale: true
    },
    {
      title: "Canon EOS 70D",
      image: "http://ecx.images-amazon.com/images/I/81U00AkAUWL._SX522_.jpg",
      rating: 2.0,
      price: 1099.0,
      onSale: false
    },
    {
      title: "Nikon D810A",
      image:"http://ecx.images-amazon.com/images/I/91wtXIfLl2L._SX522_.jpg",
      rating: 4.2,
      price: 3796.95,
      onSale: true
    }
  ];
  $scope.cameraSort = function(item) {
    if(isNaN(item[$scope.cameraSortExpression]))
      return item[$scope.cameraSortExpression];
    return parseInt(item[$scope.cameraSortExpression]);
  };
};

var ExercisesController = function($scope){
  $scope.FavColor = "maroon";
  $scope.secondsInACentury = function calculateSeconds(){
    var secondsInMin = 60;
    var minutesInHour = 60;
    var hoursInDay = 24;
    var daysInYear = 365;
    var yearsInCentury = 100;
    var secondsInCentury = secondsInMin * minutesInHour * hoursInDay * daysInYear * yearsInCentury;
    return secondsInCentury;
  };
  $scope.rightNow = new Date();
  $scope.number = 5;
  $scope.pickRandomNumber = function(){
    $scope.number = Math.floor(Math.random() * 10) + 1;
  };
  $scope.reverseWord = function(){
    $scope.word = $scope.word.split("").reverse().join("");
  };
};








app
  .controller('mainController', ['$scope', mainControllerFunction])
  .controller('exerciseController', ['$scope', ExercisesController]);
