var app = angular.module('app', ['ngRoute']);

app.controller('gotToGo', function($scope, $http) {
  // Lots of code to control navigation.
  $scope.header = function(){
    return "html/layouts/_header.html";
  };

  $scope.home = function(){
    return "html/pages/_home.html";
  };

  $scope.focus = function(){
    return "html/pages/_focus.html";
  };

  $scope.list = function(){
    return "html/pages/_list.html";
  };

  $scope.ratingForm = function(){
    return "html/pages/_ratingForm.html";
  };

  $scope.filter = function(){
    return "html/pages/_filter.html";
  };

  $scope.about = function(){
    return "html/pages/_about.html";
  };

  $scope.footer = function(){
    return "html/layouts/_footer.html";
  };

  // creates and manages currentPage variable to control switch statement based nav
  $scope.currentPage = "home";
  $scope.extraInfo = false;

  $scope.navLinks = function(newPage){
    $scope.currentPage = newPage;
  };
  
  // php/mysql controller stuff. Might be nice to seperate from main controller.
  getRatings();
  function getRatings(){
    $http.post("getRatings.php").success(function(data){
      $scope.ratings = data;
    });
  };
  $scope.addRating = function(rating){
    console.log(rating);
    // $http({ method: "POST", url: "addRating.php", data: rating, cache: false }).success(function(data){
    //   getRatings();
    //   $scope.rating = "";
    // });
    
    $http.post("addRating.php", rating).success(function(data){
      getRatings();
      $scope.rating = "";
    });
  };
  
  console.log($scope);
});