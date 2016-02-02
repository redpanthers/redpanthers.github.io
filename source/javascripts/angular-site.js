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
      "landing":{
        templateUrl:"javascripts/template/landing/landing.html",
        controller: 'homeController'
      }
    }
  })
  .state('team',{
    url:'/team',
    views:{
      "sidebar":{
        templateUrl: 'javascripts/template/sidebar/sidebar.html'
      },
      "page":{
        templateUrl: "javascripts/template/home/team.html",
        controller: "teamController"
      }
    }
  })
  .state( 'member',{
    url:'/team/:username',
    views:{
      "sidebar":{
        templateUrl: 'javascripts/template/sidebar/sidebar.html',

      },
      "page":{
        templateUrl: "javascripts/template/home/member.html",
        controller: "teamController"
      }
    }
  })
  .state('contributions',{
    url:'/contributions',
    views:{
      "sidebar":{
        templateUrl: 'javascripts/template/sidebar/sidebar.html'
      },
      "page":{
        templateUrl:"javascripts/template/home/contributions.html",
        controller: "contributionController"
      }
    }
  })
  .state('source-contributions',{
    url:'/contributions/:source',
    views:{
      "sidebar":{
        templateUrl: 'javascripts/template/sidebar/sidebar.html'
      },
      "page":{
        templateUrl:"javascripts/template/home/source.html",
        controller: "contributionController"
      }
    }
  })
  .state('join',{
    url:'/join',
    views:{
      "sidebar":{
        templateUrl: 'javascripts/template/sidebar/sidebar.html'
      },
      "page":{
        templateUrl: "javascripts/template/join/join.html",
      }
    }
  });
}]);
