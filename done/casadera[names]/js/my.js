$(document).ready(function(){
	jQuery('ul.menu li.dropdown').hover(function() {
	jQuery(this).find('.dropdown-menu').stop(true, true).delay(100).fadeIn();
	}, function() {
	jQuery(this).find('.dropdown-menu').stop(true, true).delay(100).fadeOut();
	});

	var slider = document.getElementById('range');

	noUiSlider.create(slider, {
		start: 40,
		range: {
			'min': 0,
			'max': 100
		}
	});

	slider.noUiSlider.on('update', function( values, handle ) {
		$('#price-value').html(values[handle]);
	});
});
