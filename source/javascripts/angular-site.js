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
      "page":{
        templateUrl:'javascripts/template/home/index.html',
        controller:'homeController'
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
  .state('contributions',{
    url:'/contributions',
    views:{
      "page":{
        templateUrl:"javascripts/template/home/contributions.html",
        controller: "contributionController"
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
