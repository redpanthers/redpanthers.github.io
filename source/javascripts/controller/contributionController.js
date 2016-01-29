var RedPanthers = window.RedPanthers || angular.module('redpanthers', {});
RedPanthers.controller('contributionController', ['$scope','$rootScope','$resource','githubApis', 'rubygemApi','cfpLoadingBar', function($scope,$rootScope, $resource, githubApis,rubygemApi,cfpLoadingBar) {
  
  var contributors = ["coderhs", 'manusajith']
  var rubyGemArray = [];
  $scope.rubyGemArray = []
  contributors.map(function(user, index) {
    rubygemApi.getEachUsersRepo(user).then(function(result) {

      rubyGemArray = _.unionBy(rubyGemArray, result, 'name')
      $scope.rubyGemArray = rubyGemArray
    })
  })
  $scope.getProjects = []
  githubApis.getAllRepository().query(function(values) {
    $scope.getProjects = values
  })

  $rootScope.$on('cfpLoadingBar:completed',function(result){
   $('body').removeClass("white-class")
  })
  $rootScope.$on('cfpLoadingBar:started',function(){
    $('body').addClass("white-class")
  })
}])