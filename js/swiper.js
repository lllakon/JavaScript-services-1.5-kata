import Swiper from 'https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.mjs'

const swiper = new Swiper('.swiper', {
  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
		clickable: true,
  },
	slidesPerView: 1.3,
	spaceBetween: 13,
	width: 320,
});