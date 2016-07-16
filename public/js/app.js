var app = angular.module('app', ['ngRoute']);

app.controller('gotToGo', function($scope, $http) {
  // defualt set up variables for page load
  $scope.currentPage = "home";
  $scope.extraInfo = false;
  $scope.admin = true;

  $scope.navLinks = function(newPage){
    $scope.currentPage = newPage;
  };
  
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
  
  $scope.adminFocus = function(){
    return "html/admin/_adminFocus.html";
  };

  $scope.adminList = function(){
    return "html/admin/_adminList.html";
  };

  $scope.footer = function(){
    return "html/layouts/_footer.html";
  };
  
  // php/mysql controller stuff. Might be nice to seperate from main controller.
  getRatings();
  function getRatings(){
    $http.post("getRatings.php").success(function(data){
      $scope.ratings = data;
    });
  };
  
  $scope.addRating = function(rating){
    $http.post("addRating.php?rating="+rating+"&name="+rating.name+"&sanitation="+rating.sanitation+"&toiletries="+rating.toiletries+"&overall="+rating.overall+"&gender="+rating.gender+"&address="+rating.address+"&description="+rating.description).success(function(data){
      getRatings();
      $scope.rating = {};
    });
  };
  
  
  $scope.getByID = function(nextID){
    $http.post("getByID.php?nextID="+nextID).success(function(data){
      $scope.currentRating = data;
    });
  };
  
  
  
  $scope.deleteRating = function (ratingID) {
    if(confirm("Are you sure to delete this rating?")){
    $http.post("deleteRating.php?ratingID="+ratingID).success(function(data){
        getRatings();
      });
    }
  };
  
  console.log($scope);
});