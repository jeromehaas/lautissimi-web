import { Swiper, Navigation, Scrollbar } from 'swiper';

class References {
	name: string;
	sliderConfigs: any;

	constructor() {
		this.name = 'references';
		this.sliderConfigs = {
			modules: [Navigation, Scrollbar],
			speed: 400,
			slidesPerView: 3,
			spaceBetween: 32,
			centeredSlides: true,
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
		};
	}

	init() {
		this.createCarousel();
	};

	createCarousel() {
		new Swiper('.slider__container', this.sliderConfigs);
	}

};

export default References;