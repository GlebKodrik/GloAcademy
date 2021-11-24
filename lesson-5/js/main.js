const swiper = new Swiper(".swiper", {
  loop: true,

  // Navigation arrows
  navigation: {
    nextEl: ".slider-button-next",
    prevEl: ".slider-button-prev",
  },
  effect: "coverflow",
  // And if we need scrollbar
  scrollbar: {
    el: ".swiper-scrollbar",
  },
  keyboard: {
    enabled: true,
    onlyInViewport: false,
  },
});
