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

// Start Text More
if (document.querySelectorAll('#text-more #text')) {
  let oldContent='';
  document.querySelectorAll('#text-more #text').forEach(text=>{
    let btnMore = document.createElement("a");
    btnMore.setAttribute("id","btn-more");
    btnMore.textContent = "المزيد";
    oldContent = text.textContent;
    text.innerHTML = text.textContent.substr(0,160) + '...';
    text.appendChild(btnMore);
  })
  // let btnsMore = document.querySelectorAll('#text-more #text ')
}