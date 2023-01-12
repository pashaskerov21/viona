const fursetCardSwiper = new Swiper(".furset-card-swiper", {
    autoplay: {
    delay: 8000,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});

const productSwiper = new Swiper(".products-swiper", {
    autoplay: {
    delay: 8000,
    },
    pagination: {
    el: '.swiper-pagination',
    clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    slidesPerView: 1.4,
    breakpoints: {
      350: {slidesPerView: 1.5},
      576: {slidesPerView: 2},
      768: {slidesPerView: 2.5},
      992: {slidesPerView: 3},   
      1200: {slidesPerView: 4},   
    },
});

const productTopSwipers = document.querySelectorAll(".product-top-swiper");
const productThumbSwipers = document.querySelectorAll(".product-thumb-swiper");

for(let i = 0; i < productTopSwipers.length; i++){
  productTopSwipers[i].classList.add("top-swiper-" + i);
  productThumbSwipers[i].classList.add("thumb-swiper-" + i);

  var thumbsSwipers = new Swiper('.thumb-swiper-' + i , {
    spaceBetween: 10,
    slidesPerView: 3,
    freeMode: true,
    watchSlidesVisibility: true,
    watchSlidesProgress: true,
  });

  var topSwipers = new Swiper(".top-swiper-" + i , {
    spaceBetween: 10,
    thumbs: {
      swiper: thumbsSwipers
    }
  })
};



const roomCategorySwiper = new Swiper(".room-category-swiper", {
  autoplay: {
  delay: 5000,
  },
  loop: true,
  pagination: {
  el: '.swiper-pagination',
  clickable: true,
  },
  slidesPerView: 1,
  spaceBetween: 10,
  breakpoints: {
    350: {slidesPerView: 1.3},
    400: {slidesPerView: 1.4},
    450: {slidesPerView: 1.5},
    500: {slidesPerView: 1.6},
    550: {slidesPerView: 1.7},
    576: {slidesPerView: 2},
    650: {slidesPerView: 2.5},
    768: {slidesPerView: 3},
    900: {slidesPerView: 3.5},
    992: {slidesPerView: 4},
    1200: {slidesPerView: 4.5},
    1400: {slidesPerView: 5},
    1500: {slidesPerView: 5.5},
    },
});



const modalTopSwipers = document.querySelectorAll(".modal-top-swiper");
const modalThumbSwipers = document.querySelectorAll(".modal-thumb-swiper");

for(let i = 0; i < modalTopSwipers.length; i++){
  modalTopSwipers[i].classList.add("modal-top-swiper-" + i);
  modalThumbSwipers[i].classList.add("modal-thumb-swiper-" + i);

  var modalThumbSwipers2 = new Swiper('.modal-thumb-swiper-' + i , {
    spaceBetween: 10,
    slidesPerView: 3,
    breakpoints:{
      576: {slidesPerView: 4},
    },
    freeMode: true,
    watchSlidesVisibility: true,
    watchSlidesProgress: true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });

  var modalTopSwipers2 = new Swiper(".modal-top-swiper-" + i , {
    spaceBetween: 10,
    thumbs: {
      swiper: modalThumbSwipers2
    }
  })
};


const aboutThumbSwiper = new Swiper(".about-thumb-swiper", {
  freeMode: true,
  watchSlidesVisibility: true,
  watchSlidesProgress: true,
  slidesPerView: 3,
  breakpoints:{
    576: {slidesPerView: 4},
    768: {slidesPerView: 5},
  },
  spaceBetween: 10,
});

const aboutTopSwiper = new Swiper(".about-top-swiper",{
  spaceBetween: 10,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
    },
  thumbs: {
    swiper: aboutThumbSwiper
  }
});

const productColorSwiper = new Swiper(".product-color-swiper", {
  slidesPerView: 1.5,
  spaceBetween: 1,
  breakpoints: {
    350: {slidesPerView: 1.8},
    400: {slidesPerView: 2},
    450: {slidesPerView: 2.5},
    500: {slidesPerView: 2.7},
    550: {slidesPerView: 3},
    600: {slidesPerView: 3.5},
    650: {slidesPerView: 4},
  }
});


const homeBannerSwiper = new Swiper(".home-banner-swiper", {
  autoplay: {
  delay: 5000,
  },
  loop: true,
});


const partnerSwiper = new Swiper(".partners-swiper", {
  autoplay: {
  delay: 5000,
  },
  loop: true,
  pagination: {
  el: '.swiper-pagination',
  clickable: true,
  },
  slidesPerView: 1,
  spaceBetween: 10,
  breakpoints: {
    540: {slidesPerView: 2,spaceBetween: 10},
    768: {slidesPerView: 3,spaceBetween: 10},
    992: {slidesPerView: 4,spaceBetween: 10},
    1400: {slidesPerView: 5,spaceBetween: 10},
    },
});