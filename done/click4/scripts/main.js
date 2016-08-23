'use strict';

$(document).ready(function () {
  $('select').select2();
});
//owl
$('.users-carousel').owlCarousel({
  loop: true,
  margin: 10,
  responsiveClass: true,
  autoWidth: true,
  navText: ["<i class='fa fa-lg fa-angle-left'></i>", "<i class='fa fa-lg fa-angle-right'></i>"],
  responsive: {
    0: {
      items: 1,
      nav: true
    },
    600: {
      items: 3,
      nav: false
    },
    1000: {
      items: 9,
      nav: true,
      loop: false
    }

  }
});
//validation
function validate_form() {
  valid = true;
  if (document.profile_form.profile_name.value == '') {
    alert("Пожалуйста заполните поле 'Ваше имя'.");
    valid = false;
  }
  return valid;
}
//# sourceMappingURL=main.js.map
