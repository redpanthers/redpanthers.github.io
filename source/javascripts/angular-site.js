/**
 * Define angular module redpanther
 *
 * Angular UI Router
 *
 */
window.RedPanther = angular.module('redpanther',['ui.router','angular-loading-bar','ngAnimate','iso.directives','ui.bootstrap']);
window.RedPanther.config(function($stateProvider,$urlRouterProvider,$uibTooltipProvider){
  $uibTooltipProvider.setTriggers(
    {
      'mouseenter': 'mouseleave',
      'click': 'click',
      'focus': 'blur',
      'never': 'mouseleave'
    }
  );
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
      },
      "join":{
        templateUrl:"javascripts/template/join/join.html",
        controller: "headerController"
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
      },
      "join":{
        templateUrl:"javascripts/template/join/join.html",
        controller: "headerController"
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
      },
      "join":{
        templateUrl:"javascripts/template/join/join.html",
        controller: "headerController"
      }
    }
  })
  .state('team',{
      url:'/team',
      views:{
        "header":{
          templateUrl: "javascripts/template/header/header.html",
          controller: "headerController"
        },
        "page":{
          templateUrl: "javascripts/template/home/team.html",
          controller: 'teamController'
        },
        "join":{
          templateUrl:"javascripts/template/join/join.html",
          controller: "headerController"
        }
      }
    })
});

