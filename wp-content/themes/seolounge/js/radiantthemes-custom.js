(function($){"use strict";jQuery(document).on("ready",function(){jQuery(window).on("scroll",function(){if(jQuery(this).scrollTop()>100){jQuery(".scrollup").addClass("active");}else{jQuery(".scrollup").removeClass("active");}});jQuery(".scrollup").on("click",function(){jQuery("html, body").animate({scrollTop:0},600);return false;});jQuery(".floating-searchbar i").on("click",function(){jQuery("body").toggleClass("floating-searchbar-active");});jQuery(".flyout-searchbar-toggle i").on("click",function(){jQuery("body").toggleClass("flyout-searchbar-active");});jQuery(".flyout-search-close").on("click",function(){jQuery("body").removeClass("flyout-searchbar-active");});jQuery(".top-bar-toggle, .header-full-width-menu").on("click",function(){jQuery("body").toggleClass("top-bar-menu-open");});jQuery(".nav-icon").on("click",function(){jQuery("body").toggleClass("full-open");});jQuery(".wraper_fullwidth_menu .full-inner nav ul li.menu-item-has-children").each(function(){jQuery(this).children("a").on("click",function(DisableClick){DisableClick.preventDefault();jQuery(this).parent().children("ul").slideToggle(500);});});jQuery(".search-form, .woocommerce-product-search").each(function(){jQuery(this).find("input[type=submit]").replaceWith("<button type='submit'><i class='fa fa-search'></i></button>");});jQuery(".comments-area .comment-form > p input[type='submit']").each(function(){jQuery(this).replaceWith("<button type='submit'><span>Post Comment</span></button>");});jQuery(".comments-area .comment-form > p input[type='reset']").each(function(){jQuery(this).replaceWith("<button type='reset'><span>Reset Comment</span></button>");});jQuery("[data-toggle='tooltip']").tooltip();jQuery(".responsive-nav").each(function(){jQuery(this).sidr({side:'right',speed:600,displace:false,renaming:false,source:'.mobile-menu',name:'mobile-menu',onOpen:function(){jQuery("body").addClass("mobile-menu-open");},onClose:function(){jQuery("body").removeClass("mobile-menu-open");},});jQuery(".mobile-menu-close").on("click",function(){jQuery.sidr('close','mobile-menu');});});jQuery(".header-hamburger").each(function(){jQuery(this).sidr({side:'right',speed:600,displace:false,renaming:false,source:'.hamburger-menu-holder',name:'hamburger-menu',onOpen:function(){jQuery("body").addClass("hamburger-menu-open");},onClose:function(){jQuery("body").removeClass("hamburger-menu-open");},});jQuery(".hamburger-menu-close").on("click",function(){jQuery.sidr('close','hamburger-menu');});});jQuery(".sidr .menu-item-has-children").each(function(){jQuery(this).children("ul, .rt-mega-menu").css({"display":"none",});jQuery(this).append("<span class='radiantthemes-open-submenu'></span>");jQuery(this).find(".radiantthemes-open-submenu").on("click",function(){jQuery(this).parent(".menu-item-has-children").toggleClass("radiantthemes-menu-open");jQuery(this).parent(".menu-item-has-children").children("ul, .rt-mega-menu").slideToggle(700);});});jQuery("body[data-page-transition='1'] a:not(.fancybox):not(.video-link):not([target='_blank'])").each(function(){jQuery(this).on("click",function(event){let PageLink=jQuery(this).attr("href");if("#"==PageLink){}else if(PageLink.startsWith("#")){}else{event.preventDefault();jQuery("body").addClass("page-transition-active");setTimeout(function(){window.location.href=PageLink;},700);}});});jQuery(".shop_single .quantity input[type=number]").each(function(){jQuery(this).addClass("form-control");jQuery(this).parent().addClass("input-group");jQuery(this).before("<div class='input-group-addon quantity-decrease'>-</div>");jQuery(this).after("<div class='input-group-addon quantity-increase'>+</div>");jQuery(this).parent().find(".quantity-decrease").on("click",function(){if(jQuery(this).parent().find("input[type=number]").val()==jQuery(this).parent().find("input[type=number]").attr("min")){alert("Sorry! You're already on lowest value.");}else{jQuery(this).parent().find("input[type=number]").val(+jQuery(this).parent().find("input[type=number]").val()-1);}});jQuery(this).parent().find(".quantity-increase").on("click",function(){jQuery(this).parent().find("input[type=number]").val(+jQuery(this).parent().find("input[type=number]").val()+1);});});jQuery(".matchHeight").matchHeight();var wow=new WOW({boxClass:'wow',animateClass:'animated',mobile:true,live:true,scrollContainer:null,});wow.init();if(jQuery(window).width()>767){jQuery(".infinity-scroll").niceScroll({cursorcolor:jQuery("body").data("nicescroll-cursorcolor"),cursorwidth:jQuery("body").data("nicescroll-cursorwidth"),cursorborder:"none",cursorborderradius:"0",});}
jQuery(".i-am-sticky").sticky();jQuery("img").attr("data-no-retina","");jQuery(".radiantthemes-retina img").removeAttr("data-no-retina");});jQuery(window).on("load",function(){setTimeout(function(){jQuery(".preloader").addClass("loaded");},jQuery(".preloader").data("preloader-timeout"));setTimeout(function(){jQuery(".page-transition-layer").removeClass("i-am-active");},700);setTimeout(function(){jQuery(".matchHeight").matchHeight();},2000);});})(jQuery);