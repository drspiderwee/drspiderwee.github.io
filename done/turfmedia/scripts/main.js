'use strict';

$('.sites-carousel').owlCarousel({
  loop: true,
  margin: 10,
  responsiveClass: true,
  responsive: {
    0: {
      items: 1,
      nav: false
    },
    600: {
      items: 3,
      nav: false
    },
    1000: {
      items: 3,
      nav: false,
      dots: true,
      loop: false
    }
  }
});

$(window).scroll(function () {
  if ($(this).scrollTop() > 100) {
    $('.navbar-fixed-top').addClass('opaque');
  } else {
    $('.navbar-fixed-top').removeClass('opaque');
  }
});

$('body').scrollspy({ target: '.navbar' });
//# sourceMappingURL=main.js.map
