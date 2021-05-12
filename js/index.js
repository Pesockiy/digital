
//slider config
const swiper = new Swiper('.swiper-container', {
  speed: 400,
  navigation: {
    disabledClass: 'disabled',
    nextEl: '.arrow-next',
    prevEl: '.arrow-prev',
  },
  pagination: {
    el: '.swiper-pagination',
    type: 'fraction',
    //custom pagination
    renderFraction: function (currentClass, totalClass) {
      return '<span class="' + currentClass + '"></span>' +
        '<span class="separator"></span>' +
        '<span class="' + totalClass + '"></span>';
    },
  },


});

//hamburger button for mobile navigation
let hamburger = document.querySelector('.hamburger');
let navbar = document.querySelector('.right-wrap');

hamburger.addEventListener('click', (e) => {
  hamburger.classList.toggle('active');
  navbar.classList.toggle('mobile');
  document.querySelector('.header__container').classList.toggle('mobile-wrap')
  document.body.classList.toggle('noscroll')
})

//custom placeholder
let inputs = [...document.querySelectorAll('input'), ...document.querySelectorAll('textarea')];

inputs.forEach(i => {
  i.addEventListener('input', () => {
    let formGroup = i.closest('.form__group');
    (i.value.length > 0) ? i.nextSibling.classList.add('hide') : i.nextSibling.classList.remove('hide');
    (i.value.length > 5) ? formGroup.classList.add('success') : formGroup.classList.remove('success');
  })
})