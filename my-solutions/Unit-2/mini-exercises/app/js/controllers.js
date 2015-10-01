app.controller('HeaderController', function($scope, $location){
    $scope.isActive = function (viewLocation) {
        return $location.path().indexOf(viewLocation) === 0;
    };
});

app.controller('homeController', function($scope) {
  $scope.greeting = 'This is the homepage.';
});

app.controller('projectsController', function($scope) {
  $scope.greeting = 'These are my projects.';

});

app.controller('bioController', function($scope) {
  $scope.greeting = 'This is my bio.';
});

app.controller('resumeController', function($scope) {
  $scope.greeting = 'This is my resume.';

});

app.controller('addThingsController', function($scope, $routeParams){
  $scope.greeting = 'Add two numbers to url to add stuff.';
  $scope.ifParams = false;
});

app.controller('addController', function($scope, $routeParams){
  $scope.num1 = parseInt($routeParams.num1);
  $scope.num2 = parseInt($routeParams.num2);
  $scope.ifParams = true;
});


