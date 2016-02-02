var RedPanthers = window.RedPanthers || angular.module('redpanthers',[]);
RedPanthers.controller('homeController',['$scope','$rootScope','cfpLoadingBar',function($scope,$rootScope,cfpLoadingBar){
  $scope.title = "Redpanther IO";
 $('body').removeClass("white-class")
}])
