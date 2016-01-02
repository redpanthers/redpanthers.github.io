var RedPanther = RedPanther || {}
RedPanther.controller('homeController',['$scope','openSouceProjects',function($scope,openSouceProjects){
  $scope.title = "Redpanther IO";
  $scope.getCategoryList = openSouceProjects.getProjectCategories();
  $scope.projects = openSouceProjects.getTenProjectsByCategory();
}])
