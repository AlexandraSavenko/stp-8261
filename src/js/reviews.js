import Swiper from 'swiper/bundle';
import 'swiper/css';
import 'swiper/css/parallax';


const swiper = new Swiper('.reviews-swiper', {
 slidesPerView: 1,
      spaceBetween: 24,
      loop: true,

  pagination: {
    el: ".swiper-pagination",
    dynamicBullets: true,
    
  },
  
   // Navigation arrows

keyboard: {
  enabled: true,
  onlyInViewport: true,
},
breakpoints: {

    1200: {
      slidesPerView: 3,

      navigation: {
  nextEl: '.swiper-button-next',
  prevEl: '.swiper-button-prev',
},
    },
  },
});
