var RedPanthers = window.RedPanthers || angular.module('redpanthers',[]);
RedPanthers.directive('imageOnLoad',function(){
  imageOn = {};
  imageOn.restrict= 'A';
  imageOn.link = function(scope,element,attr){
    
    $(element).find('img').on('load',function(){
      $(element).removeClass('hidden')
    })
  }
  return imageOn;
})