// import Swiper bundle with all modules installed
import Swiper from 'swiper/bundle';

// import styles bundle
import 'swiper/css/bundle';


// init Swiper:
const swiper = new Swiper('.features-swiper', {
    slidesPerView: 1,
    pagination: {
      el: ".swiper-pagination",
      dynamicBullets: true,
      
    },
    
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