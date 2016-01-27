/**
 * Define angular module redpanther
 *
 * Angular UI Router
 *
 */

window.RedPanther = angular.module('redpanthers',['ui.router','angular-loading-bar','ngAnimate','iso.directives','ngResource']);
window.RedPanther.config(['$stateProvider','$urlRouterProvider',function($stateProvider,$urlRouterProvider){
  $urlRouterProvider.otherwise('/');
  $stateProvider
  .state('home',{
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
  .state('team',{
    url:'/team',
    views:{
      "page":{
        templateUrl: "javascripts/template/home/team.html",
        controller: "teamController"
      }
    }
  })
  .state( 'member',{
    url:'/team/:username',
    views:{
      "page":{
        templateUrl: "javascripts/template/home/member.html",
        controller: "teamController"
      }
    }
  })
  .state('about',{
    url:'/about',
    views:{
      "page": {
        templateUrl: "javascripts/template/home/about.html",
      }
    }
  })
  .state('join',{
    url:'/join',
    views:{
      "page":{
        templateUrl: "javascripts/template/join/join.html",
      }
    }
  });
}]);
