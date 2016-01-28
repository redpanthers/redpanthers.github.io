var RedPanthers = window.RedPanthers || angular.module('redpanthers',{});
RedPanthers.controller('contributionController',['$scope','$resource','rubygemApi',function($scope,$resource,rubygemApi){
  var contributors = ["coderhs",'manusajith']
  var rubyGemArray = [];
  $scope.rubyGemArray = []
  contributors.map(function(user,index){
    rubygemApi.getEachUsersRepo(user).then(function(result){

      rubyGemArray = _.unionBy(rubyGemArray, result,'name')
      $scope.rubyGemArray = rubyGemArray
    })    
  })
  
  
}])