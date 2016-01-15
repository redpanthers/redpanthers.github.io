var Redpanther = window.RedPanther || angular.module('redpanther',[]);
Redpanther.controller('teamController',['$scope','openSouceProjects',function($scope,openSouceProjects){
  $scope.teams = openSouceProjects.getTeamDetails();

}]);

Redpanther.directive('hoverPopover',function($timeout, $rootScope,$templateCache){
  var directive = {};
  directive:restrict= 'A';
  directive.link= function(scope,element,attr){
    var templateName  = ($(element).attr('uib-popover-template')).replace("'","").replace("'","")
    $(element).popover({
      content: $templateCache.get(templateName),
      html: true,
      placement: $(element).attr('popover-placement')||'top',
      title: $(element).attr('popover-title')
    })
    $(element).on('mouseover',function(){
      $(element).popover('show')
    })
    $(element).parent().on('mouseleave',function(){
      $(element).popover('hide')
    })
  }
  return directive;
})