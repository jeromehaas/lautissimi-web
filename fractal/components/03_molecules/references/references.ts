import { Swiper, Navigation, Scrollbar } from 'swiper';

class References {
	name: string;

	constructor() {
		this.name = 'references';
	}

	init() {
		this.createCarousel();
	};

	createCarousel() {
		new Swiper('.slider__container', {
			modules: [Navigation, Scrollbar],
			speed: 400,
			slidesPerView: 1,
			spaceBetween: 32,
			centeredSlidesBounds: true,
			navigation: {
				nextEl: '.swiper-button-next',
				prevEl: '.swiper-button-prev'
			},
			scrollbar: {
				el: '.swiper-scrollbar',
				draggable: true,
			},
			breakpoints: {
				800: { slidesPerView: 3 },
				1200: { slidesPerView: 4 },
				1600: { slidesPerView: 5 },
			},
		});
	}

};

export default References;