import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

class Intro {

	constructor() {
		this.name = 'intro';
		this.elements = {
			container: document.querySelector('.intro'),
			image: document.querySelector('.intro__image')
		};
		this.clipping = {
			top: 50,
			right: 0,
			bottom: 0,
			left: 0
		};
		this.timeline = gsap.timeline({
			scrollTrigger: {
				trigger: '.intro',
				markers: false, 
				start: 'top center',
				end: 'bottom center',
				onUpdate: ({ progress }) => {
					this.slide(progress);
				}
			}
		});
	}

	init = () => {
		this.addEventListener();
	};

	addEventListener = () => {
		this.elements.image.addEventListener('click', () => this.animate());
	};

	slide = (progress) => {
		this.elements.image.style.clipPath = `inset(0% ${50 - (progress * 50)}% 0% ${0 + (progress * 50)}% )`;
	};

}

export default Intro;