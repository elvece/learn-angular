var app = angular.module('pingPong', []);

var mainController = function($scope){
  $scope.init = function(){
    $scope.game = {
      playerOne: {
        score: 0,
        serving: true
      },
      playerTwo: {
        score: 0,
        serving: false
      }
    };
  };
  $scope.init();
  $scope.click = 0;

  $scope.incrementScorePlayerOne = function(){
    if ($scope.game.playerOne.score < 11){
      $scope.game.playerOne.score ++;
      $scope.click ++;
    }
  };

  $scope.incrementScorePlayerTwo = function(){
    if ($scope.game.playerTwo.score < 11){
      $scope.game.playerTwo.score ++;
      $scope.click ++;
    } else {

    }
  };
  $scope.serving = function(){
    if ($scope.click === 0){
      $scope.game.playerOne.serving = true;
    }
    if ($scope.click % 2 === 0){
      if ($scope.game.playerOne.serving){
        $scope.game.playerOne.serving = false;
        $scope.game.playerTwo.serving = true;
      } else {
        $scope.game.playerOne.serving = true;
        $scope.game.playerTwo.serving = false;
      }
    }
  };
};

app.controller('mainController', ['$scope', mainController]);

//TO DO:
//if player1 score is 11, then disable click of player2
//same with saying who is serving



