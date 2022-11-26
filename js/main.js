// Initialize Swiper Slider
// Set Landing Page Slider
const swiperElement = document.querySelector(".landing-swiper")
const swiper = new Swiper(swiperElement, {
  // Optional parameters
  slidesPerView: 1,
  loop: true,
  centeredSlides: true,
  speed: 700,
  autoplay: {
    delay: 1500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
  },
});

// Start set config of AOS Library
AOS.init();
