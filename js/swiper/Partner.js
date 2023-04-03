const partnerSwiperFunc = () => {
    const partnerSwiper = new Swiper(".partners-swiper", {
        autoplay: {
        delay: 5000,
        },
        loop: true,
        pagination: {
        el: '.swiper-pagination',
        clickable: true,
        dynamicBullets: true,
        dynamicMainBullets: 8,
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
    return partnerSwiper;
}
export default partnerSwiperFunc;