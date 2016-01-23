var Redpanther = window.RedPanther || angular.module('redpanther',[]);
Redpanther.controller('teamController',['$scope','$stateParams','githubApis',function($scope,$stateParams,githubApis){
  $scope.teams = []
  $scope.currentUser = []
  $scope.compnay = {}
  /**
   * Get Team members details
   * 
   */
  if(typeof($stateParams.username)=="undefined"){
    githubApis.getRedpanthersMembers().then(function(members){
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
  
  
}]);

