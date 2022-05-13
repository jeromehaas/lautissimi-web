import { Swiper, Navigation, Scrollbar } from 'swiper';

class References {
	name: string;
	sliderConfigs: any;

	constructor() {
		this.name = 'references';
		this.slider = {
			element: null,
			configs: {
				modules: [Navigation, Scrollbar],
				speed: 400,
				slidesPerView: 1.6,
				spaceBetween: 32,
				navigation: {
					nextEl: '.swiper-button-next',
					prevEl: '.swiper-button-prev'
				},
				scrollbar: {
					el: '.swiper-scrollbar',
					draggable: true,
				},
				breakpoints: {
					650: { slidesPerView: 2.5, spaceBetween: 32, },
					950: { slidesPerView: 4, spaceBetween: 32, },
					1200: { slidesPerView: 4, spaceBetween: 32, },
					1600: { slidesPerView: 5, spaceBetween: 32, },
				},	
			}
		};
	}

	init = () => {
		this.createCarousel();
	};

	createCarousel = () => {
		this.slider.element = new Swiper('.slider__container', this.slider.configs);
	};

};

export default References;