const productColorSwiperFunc = () => {
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
    return productColorSwiper;
}
export default productColorSwiperFunc;