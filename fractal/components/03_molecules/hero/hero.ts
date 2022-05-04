import { gsap } from 'gsap';
import Swiper, { Autoplay, EffectFade, Navigation, Pagination, Zoom } from 'swiper';

class Hero {
	name: string;
	elements: any;

	constructor() {
		this.name = 'hero';
		this.elements = {
			scroller: document.querySelector('.panel__scroller'),
		};
	}

	init = () => {
		if (!document.querySelector(`.js-${this.name}`)) return;
		this.createSlider();
		this.animateScroller();
	};

	createSlider = () => {
		new Swiper('.swiper', {
			modules: [ Autoplay, EffectFade ],
			speed: 1500,
			freeMode: false,
			loop: true,
			spaceBetween: 30,
			effect: 'fade',
			autoplay: {
				delay: 15000,
				disableOnInteraction: false,
			}
		});
	};

	animateScroller = () => {
		gsap.fromTo(this.elements.scroller, 
			{ y: 0 },
			{ y: 16, repeat: -1, yoyo: true, repeatDelay: 0.3, duration: 0.6, ease: 'power4.easeInOut' }
		);
	};

}

export default Hero;