const productAboutSwiperFunc = () => {
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
    return aboutThumbSwiper, aboutTopSwiper;
}
export default productAboutSwiperFunc;