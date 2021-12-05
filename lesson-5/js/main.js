$(document).ready(function () {
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
    document
      .querySelector(`.header-menu`)
      .classList.toggle("header-menu_active");
  });

  let modalButton = $("[data-toggle=modal]");
  let closeModalButton = $(".modal__close");
  const openOverlay = () => {
    let modalOverlay = $(".modal__overlay");
    let modalDialog = $(".modal__dialog");

    modalOverlay.addClass("modal__overlay_visible");
    modalDialog.addClass("modal__dialog_visible");
  };
  const closeOverlay = (event) => {
    event && event.preventDefault();
    let modalOverlay = $(".modal__overlay");
    let modalDialog = $(".modal__dialog");

    modalOverlay.removeClass("modal__overlay_visible");
    modalDialog.removeClass("modal__dialog_visible");
  };

  modalButton.on("click", openOverlay);
  closeModalButton.on("click", closeOverlay);

  $(document).keyup(function (e) {
    if (e.keyCode == 27) {
      closeOverlay();
    }
  });
});
