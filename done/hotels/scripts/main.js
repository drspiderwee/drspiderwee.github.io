"use strict";$(".news-carousel").owlCarousel({loop:!0,margin:10,responsiveClass:!0,navText:["<img src='./images/navprev.png'>","<img src='./images/navnext.png'>"],responsive:{0:{items:1,nav:!1},600:{items:1,nav:!1},1e3:{items:1,nav:!0,dots:!1,loop:!1}}}),$(".events-carousel").owlCarousel({loop:!0,margin:10,responsiveClass:!0,navText:["<img src='./images/event-left.png'>","<img src='./images/event-right.png'>"],responsive:{0:{items:1,nav:!1},600:{items:1,nav:!1},1e3:{items:1,nav:!0,dots:!1,loop:!1}}}),$(document).ready(function(){$(".bxslider").bxSlider({pagerCustom:"#bx-pager"}),$(".js-example-basic-single").select2()}),$(document).ready(function(){$(".go_to").click(function(){var e=$(this).attr("href");return 0!=$(e).length&&$("html, body").animate({scrollTop:$(e).offset().top},500),!1})}),$(".panel-collapse").on("hide.bs.collapse",function(){$(this).prev().find("i").addClass("fa-angle-down").removeClass("fa-angle-up")}),$(".panel-collapse").on("show.bs.collapse",function(){$(this).prev().find("i").addClass("fa-angle-up").removeClass("fa-angle-down")}),console.log("'Allo 'Allo!");