const modalSwipersFunc = () => {
    const modalTopSwipers = document.querySelectorAll(".modal-top-swiper");
    const modalThumbSwipers = document.querySelectorAll(".modal-thumb-swiper");
    var modalThumbSwipers2, modalTopSwipers2;
    for(let i = 0; i < modalTopSwipers.length; i++){
        modalTopSwipers[i].classList.add("modal-top-swiper-" + i);
        modalThumbSwipers[i].classList.add("modal-thumb-swiper-" + i);

        modalThumbSwipers2 = new Swiper('.modal-thumb-swiper-' + i , {
            spaceBetween: 10,
            slidesPerView: 3,
            freeMode: true,
            // loop:true,
            navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
            },
        });

        modalTopSwipers2 = new Swiper(".modal-top-swiper-" + i , {
            spaceBetween: 10,
            thumbs: {
            swiper: modalThumbSwipers2
            }
        })
    };

    return modalThumbSwipers2, modalTopSwipers2;
}

export default modalSwipersFunc;