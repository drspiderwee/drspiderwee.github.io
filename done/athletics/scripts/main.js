"use strict";jQuery(document).ready(function(){$(".dropdown").hover(function(){$(".dropdown-menu",this).stop().fadeIn("fast")},function(){$(".dropdown-menu",this).stop().fadeOut("fast")});var e=$(".owl-news");e.owlCarousel({loop:!0,margin:10,mouseDrag:!1,autoplay:!1,autoplayTimeout:100,autoplaySpeed:2e4,dots:!0,responsive:{0:{items:1},600:{items:1},1e3:{items:1}}}),$(".next-news").click(function(){e.trigger("next.owl.carousel")}),$(".prev-news").click(function(){e.trigger("prev.owl.carousel",[300])});var o=!1;$(".play-news").click(function(){var a=$(this).find("i");o=!o,o?(a.removeClass("fa-play"),a.addClass("fa-pause"),e.trigger("play.owl.autoplay",[0,2e3])):(e.trigger("prev.owl.carousel"),e.trigger("stop.owl.autoplay"),a.removeClass("fa-pause"),a.addClass("fa-play"))})});