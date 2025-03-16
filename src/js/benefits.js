import Swiper from 'swiper/bundle';

import 'swiper/css/bundle';

let swiperInstance; 
function handleSwiper() {
  if (window.innerWidth <= 1200) { 
    if (!swiperInstance) { // Initialize only if it doesn't exist
      swiperInstance = new Swiper('.benefits-swiper', {
        slidesPerView: 1,
        spaceBetween: 24,
        keyboard: {
          enabled: true,
          onlyInViewport: true,
        },
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
      });
            console.dir(swiperInstance)

    }
  } else { 
    if (swiperInstance) { 
      document.querySelector('.benefits-swiper').style.display = 'none';
      // document.querySelectorAll('.swiper-container').forEach(swiper => {
      //   if (swiper.swiper) {
      //     swiper.swiper.destroy(true, true);
      //   }
      // });
      
      // console.log(`this is swiper instance ${swiperInstance.destroy}`)
  //     swiperInstance.destroy(false, true);
  //     document.querySelector('.benefits-swiper').style.display = 'none';
  // setTimeout(() => {
  //   document.querySelector('.benefits-swiper').style.display = 'block';
  // }, 10);
  // swiperInstance = null;

    }
  }
}

handleSwiper();
window.addEventListener('resize', handleSwiper);

