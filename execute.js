// Splide 
const swiper = new Swiper('.swiper', {
    loop:true,
    speed: 400,
    spaceBetween: 100,
    effect: 'card',
    grabCursor: true,
    centeredSlides:true,
    autoplay: {
        delay: 5000,
    },
    pagination: {
    el: '.swiper-pagination',
    },
    navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
    },
    slidesPerView:1
  });

//AOS