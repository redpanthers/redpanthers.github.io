var RedPanther = window.RedPanther || angular.module('redpanther',[]);
RedPanther.controller('homeController',['$scope','githubApis',function($scope,githubApis){
  $scope.title = "Redpanther IO";
  $scope.getCategoryList = []
  githubApis.getAllLanguages().then(function(values){
  	$scope.getCategoryList =  values
	});

	$scope.getProjects = [] 
	githubApis.getAllRepository().then(function(values){
		$scope.getProjects = values
	})
  
}])
