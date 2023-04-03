const cardThumbSwiperFunc = () => {
    const productTopSwipers = document.querySelectorAll(".product-top-swiper");
    const productThumbSwipers = document.querySelectorAll(".product-thumb-swiper");

    var thumbsSwipers, topSwipers;

    for(let i = 0; i < productTopSwipers.length; i++){
        productTopSwipers[i].classList.add("top-swiper-" + i);
        productThumbSwipers[i].classList.add("thumb-swiper-" + i);

        thumbsSwipers = new Swiper('.thumb-swiper-' + i , {
            spaceBetween: 10,
            slidesPerView: 3,
            freeMode: true,
            watchSlidesVisibility: true,
            watchSlidesProgress: true,
        });

        topSwipers = new Swiper(".top-swiper-" + i , {
            spaceBetween: 10,
            thumbs: {
            swiper: thumbsSwipers
            }
        })
    };

    return thumbsSwipers, topSwipers;
}

export default cardThumbSwiperFunc;