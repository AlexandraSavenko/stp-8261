import Swiper from 'swiper/bundle';

import 'swiper/css/bundle';
let swiperInstance; 
function handleSwiper() {

  if (window.innerWidth < 1200) { 
    if (!swiperInstance) { 
      swiperInstance = new Swiper('.benefits-swiper', {
        slidesPerView: 1,
        spaceBetween: 24,
        loop: true,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        keyboard: {
          enabled: true,
          onlyInViewport: true,
        },
      });
    }
  } else { 
    if (swiperInstance) { 
swiperInstance.destroy(true, true)
      swiperInstance = null
      

    }
  }
}

handleSwiper();
window.addEventListener('resize', handleSwiper);

