/**
 * Define angular module redpanther
 *
 * Angular UI Router
 *
 */

window.RedPanther = angular.module('redpanther',['ui.router','angular-loading-bar','ngAnimate','iso.directives']);
window.RedPanther.config(function($stateProvider,$urlRouterProvider){
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
  });
});
