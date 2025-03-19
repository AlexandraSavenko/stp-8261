import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

let swiperInstance; 
function handleSwiper() {

  if (window.innerWidth < 1200) { 
    if (!swiperInstance) { 
      swiperInstance = new Swiper('.gallery-swiper', {
        slidesPerView: 1,
        spaceBetween: 24,
        loop: true,
        keyboard: {
          enabled: true,
          onlyInViewport: true,
        },
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
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

