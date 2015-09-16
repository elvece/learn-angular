var app = angular.module('pingPong', []);

var mainController = function($scope){
  $scope.player_one_score = 0;
  $scope.player_two_score = 0;
  $scope.incrementScorePlayerOne = function(){
    if ($scope.player_one_score < 11){
      $scope.player_one_score ++;
    }
  };
  $scope.incrementScorePlayerTwo = function(){
    if ($scope.player_two_score < 11){
      $scope.player_two_score ++;
    }
  };
};

app.controller('mainController', ['$scope', mainController]);

//on click, need to incremement score by 1
//when reach 11, game over, swtich winner background to green and loser to red
//display current server, which switches after every two points
