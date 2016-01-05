var RedPanther = RedPanther || {}
RedPanther.directive('dropdown',function(){
  var link = function(scope, element, attr){
    element.on('click',function(e){
      var ariaExpanded  = $(this).attr('aria-expanded');

      if(ariaExpanded=="true"){// aria-expanded true, close dropdown menu
        $(this).parent('.dropdown').removeClass('open');
        $(this).attr('aria-expanded',false)
      }else{// open dropdown menu

        $(this).parent('.dropdown').addClass('open');
        $(this).attr('aria-expanded',true)
      }
    })
  };
  return{
    restrict: 'A',
    link: link
  }
});
RedPanther.directive('tooltip',function(){
  var link = function(scope, element, attr){
    element.tooltip({
      title: attr.atitle 
    })
  }
  return{
    restrict: 'A',
    link: link 
  }
});
