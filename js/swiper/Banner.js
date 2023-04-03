const bannerSwiperFunc = () => {
    const homeBannerSwiper = new Swiper(".home-banner-swiper", {
        autoplay: {
        delay: 5000,
        },
        loop: true,
      });
    return homeBannerSwiper;
}
export default bannerSwiperFunc;