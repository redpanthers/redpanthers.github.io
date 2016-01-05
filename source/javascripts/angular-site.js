var RedPanther = angular.module('redpanther',['ui.router']);
RedPanther.config(function($stateProvider,$urlRouterProvider){
  $urlRouterProvider.otherwise('/');
  $stateProvider.state('home',{
    url:'/',
    views:{
      "header":{
        templateUrl:"javascripts/template/header/header.html",
        controller: "headerController"
      },
      "page":{
        templateUrl:'javascripts/template/home/index.html',
        controller:'homeController'
      }
    }
  })
  .state('projects',{
    url:'/projects',
    views:{
      "header":{
        templateUrl:"javascripts/template/header/header.html",
        controller: "headerController"
      },
      "page":{
        templateUrl:"javascripts/template/home/categories.html",
        controller:'categoryController'
      }
    }
  })
  .state('categoryPage',{
    url:'/projects/:categorySlug',
    views:{
      "header":{
        templateUrl:"javascripts/template/header/header.html",
        controller: "headerController"
      },
      "page":{
        templateUrl: "javascripts/template/home/category.html",
        controller:'categoryController'
      }
    }
  })  
});

