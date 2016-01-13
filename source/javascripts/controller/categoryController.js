var RedPanther = window.RedPanther || angular.module('redpanther',[])
RedPanther.controller('categoryController',['$scope','$state','$stateParams','openSouceProjects',function($scope,$state,$stateParams,openSouceProjects){
  $scope.categories = openSouceProjects.getProjectCategories();
  var categorySlug = $stateParams.categorySlug;  
  $scope.category = openSouceProjects.getCategoryDetailBySlug(categorySlug)
  
  $scope.projectByCategory = openSouceProjects.getProjectsByCategorySlug(categorySlug)
}])