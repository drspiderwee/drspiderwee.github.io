$(document).ready(function(){
	jQuery('ul.menu li.dropdown').hover(function() {
jQuery(this).find('.dropdown-menu').stop(true, true).delay(100).fadeIn();
}, function() {
jQuery(this).find('.dropdown-menu').stop(true, true).delay(100).fadeOut();
});
});
