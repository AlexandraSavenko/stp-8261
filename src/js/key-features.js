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
           navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  
        },    
      },
  });

   function handleSlideChange () {
        const prevButton = document.querySelector('.features-swiper .swiper-button-prev');
        const nextButton = document.querySelector('.features-swiper .swiper-button-next');
        console.log(prevButton)
        if (this.isBeginning) {
            prevButton.classList.remove('active');
        } else {
            prevButton.classList.add('active');
        }

        if (this.isEnd) {
            nextButton.classList.remove('active');
        } else {
            nextButton.classList.add('active');
        }
    }
    
    swiper.on("slideChange", handleSlideChange)