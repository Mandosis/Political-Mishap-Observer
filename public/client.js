var app = angular.module('political-mishap', []);

app.controller('CountryController', function($scope, $http) {
  $scope.republicans = [];
  $scope.democrats = [];
  $scope.winner = '';
  $scope.showWinner = false;

  $scope.getCandidates = function() {
    $http.get('/republicans').then(function(res) {
      $scope.republicans = res.data;
    });

    $http.get('/democrats').then(function(res) {
      $scope.democrats = res.data;
    });

    $scope.getWinner = function() {
      $http.get('/winner').then(function(res) {
        $scope.winner = res.data;
        $scope.showWinner = true;
      });
    }
  };
});
