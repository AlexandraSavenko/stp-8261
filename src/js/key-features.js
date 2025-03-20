import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';


const swiper = new Swiper('.features-swiper', {
    slidesPerView: 1,
    loop: true,

    pagination: {
      el: ".swiper-pagination",
    clickable: true,

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