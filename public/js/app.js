var app = angular.module('app', ['ngRoute']);

app.controller('gotToGo', function($scope) {
  // Lots of code to control navigation.
  $scope.header = function(){
    return "../html/layouts/_header.html";
  };

  $scope.home = function(){
    return "../html/pages/_home.html"
  }

  $scope.focus = function(){
    return "../html/pages/_focus.html"
  };

  $scope.list = function(){
    return "../html/pages/_list.html"
  };

  $scope.ratingForm = function(){
    return "../html/pages/_ratingForm.html"
  };

  // creates and manages currentPage variable to control switch statement based nav
  $scope.currentPage = "home";

  $scope.navLinks = function(newPage){
    $scope.currentPage = newPage;
  };
});
