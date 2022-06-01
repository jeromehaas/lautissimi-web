import { gsap } from 'gsap';
import { Swiper, Navigation, Scrollbar } from 'swiper';

class References {
	name: string;
	slider: any;
	elements: any;

	constructor() {
		this.name = 'references';
		this.elements = {
			slider: {
				items: document.querySelectorAll('.references__slider .slider__item')
			}
		},
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
					650: { slidesPerView: 3, spaceBetween: 32, },
					950: { slidesPerView: 4, spaceBetween: 32, },
					1200: { slidesPerView: 4, spaceBetween: 32, },
					1600: { slidesPerView: 5, spaceBetween: 32, },
				},	
			}
		};
	}

	init = () => {
		this.createCarousel();
		this.hideSlides();
	};

	createCarousel = () => {
		this.slider.element = new Swiper('.slider__container', this.slider.configs);
	};

	hideSlides = () => {
		this.slider.element.on('slideChange', () => {
			const index = this.slider.element.activeIndex;
			const itemsToHide = [...this.elements.slider.items].slice(0, index);
			const items = [...this.elements.slider.items];
			gsap.to(items, { opacity: 1, duration: 1});
			gsap.to(itemsToHide, { opacity: 0, duration: 1});
		});
	};

};

export default References;