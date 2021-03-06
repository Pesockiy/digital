//hamburger button for mobile navigation
let body = document.body,
  hamburger = body.querySelector('.hamburger'),
  mobileWrap = body.querySelector('.header__container');

hamburger.addEventListener('click', mobileToggler);

//function toggler active mobile viewing of navigation
function mobileToggler() {

  hamburger.classList.toggle('active');
  mobileWrap.classList.toggle('mobile-wrap');
  document.body.classList.toggle('noscroll');

};

//scrolling to sections
let anchors = document.querySelectorAll('a[href^="#"]');

anchors.forEach(anc => {

  anc.addEventListener('click', function (e) {

    e.preventDefault();
    anchors.forEach(a => a.classList.remove('active'));

    if (mobileWrap.classList.contains('mobile-wrap')) {
      mobileToggler();
    }

    anc.classList.add('active');
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});


//custom placeholder
let inputs = [...document.querySelectorAll('input'), ...document.querySelectorAll('textarea')];//collections to the array

inputs.forEach(i => {

  i.addEventListener('input', () => {
    let formGroup = i.closest('.form__group');

    //sample of input validation by length
    (i.value.length > 0) ? i.nextSibling.classList.add('hide') : i.nextSibling.classList.remove('hide');
    (i.value.length > 5) ? formGroup.classList.add('success') : formGroup.classList.remove('success');

  });
});

//fixing header on scrolling
let header = body.querySelector('header');

window.addEventListener('scroll', () => {

  let disToTop = document.documentElement.scrollTop;

  (disToTop > 0) ? header.classList.add('fixed') : header.classList.remove('fixed');

});


//slider config
const swiper = new Swiper('.swiper-container', {
  speed: 400,
  autoplay: true,
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



  
  const sections = document.querySelectorAll(".section");
  const menu_links = document.querySelectorAll(".header .nav__link");

  const makeActive = link => menu_links[link].classList.add("active");
  const removeActive = link => menu_links[link].classList.remove("active");
  const removeAllActive = () => [...Array(sections.length).keys()].forEach((link) => removeActive(link));

//offset from top
  const sectionMargin = 200;

  let currentActive = 0;

  window.addEventListener("scroll", () => {

    const current = sections.length - [...sections].reverse().findIndex((section) => window.scrollY >= section.offsetTop - sectionMargin) - 1

    if (current !== currentActive) {
      removeAllActive();
      currentActive = current;
      makeActive(current);
    }
  });