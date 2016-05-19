var app = angular.module('app', ['ngRoute']);

app.controller('gotToGo', function($scope) {
  $scope.header = function(){
    return "../html/layouts/_header.html";
  };
});
