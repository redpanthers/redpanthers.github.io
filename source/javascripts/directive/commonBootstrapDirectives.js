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
RedPanthers.directive('fixedHomeSection',function(){
  var homeSection = {};
  homeSection.restrict = 'A';
  homeSection.link = function(scope,element,attr){
     
    $(window).scroll(function(){
      var requiredHeight = $('.project-list-nav').height();
      var requiredTop = $(window).scrollTop();
      $(element).css({height:requiredHeight})
      $('.inner-home-about').css({
        top: requiredTop
      })
    })
  }
  return homeSection;
})