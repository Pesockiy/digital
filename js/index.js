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
    renderFraction: function (currentClass, totalClass) {
      return '<span class="' + currentClass + '"></span>' +
      '<span class="separator"></span>' +
        '<span class="' + totalClass + '"></span>';
    },
  },


});

let inputs = [...document.querySelectorAll('input'),...document.querySelectorAll('textarea')];

console.log(Array.isArray(inputs),inputs);

for(i of inputs) {
  i.addEventListener('change', () => {
    if(i.value.length <= 0) {
      console.log(i)
    }
  })
}