const hotelSlider = new Swiper(".hotel-slider", {
  loop: true,

  // Navigation arrows
  navigation: {
    nextEl: ".hotel-slider__button-next",
    prevEl: ".hotel-slider__button-prev",
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

const reviewsSlider = new Swiper(".reviews-slider", {
  loop: true,

  // Navigation arrows
  navigation: {
    nextEl: ".reviews-slider__button-next",
    prevEl: ".reviews-slider__button-prev",
  },
  scrollbar: {
    el: ".swiper-scrollbar",
  },
  keyboard: {
    enabled: true,
    onlyInViewport: false,
  },
});

let menuBottom = document.querySelector(`.menu-button`);
menuBottom.addEventListener("click", () => {
  document.querySelector(`.header-menu`).classList.toggle("header-menu_active");
});
