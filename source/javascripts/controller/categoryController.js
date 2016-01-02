var RedPanther = RedPanther || {}
RedPanther.controller('categoryController',['$scope','openSouceProjects',function($scope,openSouceProjects){
  $scope.categories = openSouceProjects.getProjectCategories();
}])