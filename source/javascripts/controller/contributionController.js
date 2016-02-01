var RedPanthers = window.RedPanthers || angular.module('redpanthers', {});
RedPanthers.controller('contributionController', ['$scope','$rootScope','$stateParams','$resource','githubApis', 'rubygemApi','cfpLoadingBar', function($scope,$rootScope,$stateParams
, $resource, githubApis,rubygemApi,cfpLoadingBar) {
  
  var contributors = ["coderhs", 'manusajith']
  var rubyGemArray = [];
  $scope.getProjects = []
  $scope.rubyGemArray = []
  $scope.getCategoryList = []
  if(typeof($stateParams.source)=="undefined"){
    contributors.map(function(user, index) {
      rubygemApi.getEachUsersRepo(user).then(function(result) {
        rubyGemArray = _.unionBy(rubyGemArray, result, 'name')
        $scope.rubyGemArray = rubyGemArray
      })
    })
     githubApis.getAllRepository().query(function(values) {
      $scope.getProjects = values
     })  
  }else{
    if($stateParams.source == "ruby"){
      contributors.map(function(user, index) {
        rubygemApi.getEachUsersRepo(user).then(function(result) {
          rubyGemArray = _.unionBy(rubyGemArray, result, 'name')
          $scope.rubyGemArray = rubyGemArray
        })
      })
    }

    if($stateParams.source == "github"){
      githubApis.getAllRepository().query(function(values) {
        $scope.getProjects = values
        $scope.getProjects.map(function(values,index){
          if(values.language != null && $scope.getCategoryList.indexOf(values.language) == - 1){
            $scope.getCategoryList.push(values.language)
          }
        })
      })  
    }
  }
  
  $rootScope.$on('cfpLoadingBar:completed',function(result){
   $('body').removeClass("white-class")
  })
  $rootScope.$on('cfpLoadingBar:started',function(){
    $('body').addClass("white-class")
  })
}])