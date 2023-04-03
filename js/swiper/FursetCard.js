const fursetCardSwiperFunc = () => {
    const fursetCardSwiper = new Swiper(".furset-card-swiper", {
        autoplay: {
        delay: 8000,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });
    return fursetCardSwiper;
}
export default fursetCardSwiperFunc;