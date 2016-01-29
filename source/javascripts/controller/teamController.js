var Redpanthers = window.RedPanthers || angular.module('redpanthers',[]);
Redpanthers.controller('teamController',['$scope','$rootScope','$stateParams','githubApis',function($scope,$rootScope,$stateParams,githubApis){
  $scope.teams = []
  $scope.currentUser = []
  $scope.compnay = {}
  /**
   * Get Team members details
   *
   */
  if(typeof($stateParams.username)=="undefined"){
    githubApis.getRedpanthersMembers().query(function(members){
      $scope.teams = members
    });
    githubApis.getRedpantherCompanyInfo().get(function(result){
      $scope.company = result;
    })
  }
  if(typeof($stateParams.username)!="undefined"){
    githubApis.getUserInformation().getUser({username:$stateParams.username},function(result){
      $scope.currentUser = result

    })
  }
 $rootScope.$on('cfpLoadingBar:completed',function(result){
   $('body').removeClass("white-class")
  })
  $rootScope.$on('cfpLoadingBar:started',function(){
    $('body').addClass("white-class")
  })

}]);
