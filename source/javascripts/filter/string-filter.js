var RedPanther = window.RedPanther || angular.module('redpanther',[])
RedPanther.filter('returnFirstLetter',function(){
	return function(input){
		if(typeof input == "undefined"){
			return "";
		}else{
			return input.charAt(0).toUpperCase();
		}
	};
})