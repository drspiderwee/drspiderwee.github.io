'use strict';

var ctrlone = document.getElementById('ctrlone').id;
var ctrltwo = document.getElementById('ctrltwo').id;
var ctrlthree = document.getElementById('ctrlthree').id;
var ctrlfour = document.getElementById('ctrlfour').id;
var ctrlfive = document.getElementById('ctrlfive').id;
var ctrlsix = document.getElementById('ctrlsix').id;

function brandSlider(s) {

  if (s.id === 'ctrlone') {
    var slide = document.getElementById('brand-slide');
    slide.src = 'images/firstsld.png';
  }
  if (s.id === 'ctrltwo') {
    var slide = document.getElementById('brand-slide');
    slide.src = 'http://lorempixel.com/584/404';
  }
  if (s.id === 'ctrlthree') {
    var slide = document.getElementById('brand-slide');
    slide.src = 'http://lorempixel.com/584/404/sports';
  }
  if (s.id === 'ctrlfour') {
    var slide = document.getElementById('brand-slide');
    slide.src = 'http://lorempixel.com/584/404/city';
  }
  if (s.id === 'ctrlfive') {
    var slide = document.getElementById('brand-slide');
    slide.src = 'http://lorempixel.com/584/404/nature';
  }
  if (s.id === 'ctrlsix') {
    var slide = document.getElementById('brand-slide');
    slide.src = 'http://lorempixel.com/584/404/cats';
  }
  if (s.id === 'ctrlseven') {
    var slide = document.getElementById('brand-slide');
    slide.src = 'http://lorempixel.com/584/404/cats';
  }
  if (s.id === 'ctrleight') {
    var slide = document.getElementById('brand-slide');
    slide.src = 'http://lorempixel.com/584/404';
  }
  if (s.id === 'ctrlnine') {
    var slide = document.getElementById('brand-slide');
    slide.src = 'http://lorempixel.com/584/404/cats';
  }
  if (s.id === 'ctrlten') {
    var slide = document.getElementById('brand-slide');
    slide.src = 'http://lorempixel.com/584/404';
  }
  if (s.id === 'ctrleleven') {
    var slide = document.getElementById('brand-slide');
    slide.src = 'http://lorempixel.com/584/404/cats';
  }
  if (s.id === 'ctrltwelve') {
    var slide = document.getElementById('brand-slide');
    slide.src = 'http://lorempixel.com/584/404';
  }
}

//owl
$('.services-carousel').owlCarousel({
  loop: true,
  margin: 10,
  responsiveClass: true,
  responsive: {
    0: {
      items: 2,
      nav: false
    },
    600: {
      items: 3,
      nav: false
    },
    1000: {
      items: 5,
      nav: false,
      loop: false
    }
  }
});
$('.reviews-carousel').owlCarousel({
  loop: true,
  margin: 10,
  responsiveClass: true,
  responsive: {
    0: {
      items: 1,
      nav: false
    },
    460: {
      items: 2,
      nav: false
    },
    630: {
      items: 3,
      nav: false
    },
    840: {
      items: 4,
      nav: false
    },
    1200: {
      items: 5,
      nav: false,
      loop: false
    }
  }
});
//# sourceMappingURL=main.js.map
