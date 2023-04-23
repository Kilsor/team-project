const swiper = new Swiper('.myswiper', {
  loop: true,

  pagination: {
    el: '.swiper-pagination',
    type: 'fraction',
  },

  keyboard: {
    enabled: true,
  },

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev ',
  },
});
