const productCardSwiperFunc = () => {
    const productSwiper = new Swiper(".products-swiper", {
        autoplay: {
        delay: 8000,
        },
        pagination: {
        el: '.swiper-pagination',
        clickable: true,
        dynamicBullets: true,
        dynamicMainBullets: 8,
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
    return productSwiper;
}
export default productCardSwiperFunc;