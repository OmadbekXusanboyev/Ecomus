// Hero Slide

var swiper = new Swiper(".heroSlider", {
  slidesPerView: 1,
  loop: true,
  speed: 2000,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
})

// product Slider
var swiper = new Swiper(".procuctSwiper", {
  slidesPerView: 4,
  pauseonHover: true,
  spaceBetween: 5,
  loop: true,
  autoplay: true,
  breakpoints: {
    1200:{
      slidesPerView: 4,
      spaceBetween: 10,
    },
    900:{
      slidesPerView: 3,
      spaceBetween: 10,
    },
    500:{
      slidesPerView: 2,
      spaceBetween: 10,
    },
  },
});

// Brands Slider
var swiper = new Swiper(".brandSwiper", {
  slidesPerView: 5,
  spaceBetween: 10,
  loop: true,
  autoplay: {
    delay: 1500,
  },
  breakpoints: {
    1200:{
      slidesPerView: 4,
      spaceBetween: 10,
    },
    900:{
      slidesPerView: 3,
      spaceBetween: 10,
    },
    500:{
      slidesPerView: 2,
      spaceBetween: 20,
    },
  },
});
// Feature Slider
var swiper = new Swiper(".featureSwiper", {
  slidesPerView: 3,
  spaceBetween: 10,
  loop: true,
  autoplay: true,
  breakpoints: {
    500:{
      slidesPerView: 2,
      spaceBetween: 10,
    },
  },
});

// Show mini product

let miniProductLink1 = document.querySelector(".mini_dot");
let miniProductLink2 = document.querySelector(".mini_dot2");
let miniProduct = document.querySelector(".mini_product");
let miniProduct2 = document.querySelector(".mini_product2");

miniProductLink1.addEventListener("click", () => {
  miniProduct.classList.toggle("show_mini_product");
});
miniProductLink2.addEventListener("click", () => {
  miniProduct2.classList.toggle("show_mini_product");
});
