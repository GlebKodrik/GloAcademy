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
  $(".js-scroll-trigger").click(function () {
    var scrollName = $(this).attr("data-scroll"),
      scrollElem = $(scrollName),
      scrollTop = scrollElem.offset().top;

    $("html, body").animate(
      {
        scrollTop: scrollTop,
      },
      500
    );
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
  $(".form").each(function () {
    $(this).validate({
      rules: {
        name: {
          required: true,
          minlength: 2,
          maxlength: 20,
        },
        phone: {
          minlength: 18,
        },
      },
      messages: {
        name: {
          required: "Please specify your name",
          minlength: "Name must be at least 2 letters",
          maxlength: "Name is more than 20 characters",
        },
        email: {
          required: "We need your email address to contact you",
          email: "Your email address must be in the format of name@domain.com",
        },
        phone: {
          required: "Required phone",
          minlength: "Number is not written correctly",
        },
      },
    });
  });
  $(".newsletter__subscribe").validate({
    errorLabelContainer: ".error-block",
    messages: {
      email: {
        required: "We need your email address to contact you",
        email: "Your email address must be in the format of name@domain.com",
      },
    },
  });
  $("[name='phone']").mask("+7 (000) 000-00-00");
  AOS.init();
});
