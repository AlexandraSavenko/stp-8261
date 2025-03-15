import Swiper from 'swiper/bundle';
import 'swiper/css';
import 'swiper/css/parallax';

// const swiper = new Swiper('.swiper-container', {
//   parallax: true,
//   slidesPerView: 'auto',
//   loop: true,
//   autoplay: {
//     delay: 3000,
//     disableOnInteraction: false,
//   },
//   speed: 800,
// });

const swiper = new Swiper('.reviews-swiper', {
 slidesPerView: 1,
spaceBetween: 24,
  pagination: {
    el: ".swiper-pagination",
    dynamicBullets: true,
    
  },
  breakpoints: {

    1200: {
      slidesPerView: 3,
    },
  },
   // Navigation arrows
navigation: {
  nextEl: '.reviews-button-next',
  prevEl: '.reviews-button-prev',
},
keyboard: {
  enabled: true,
  onlyInViewport: true,
},
});
