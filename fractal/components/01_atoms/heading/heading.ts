import { gsap } from 'gsap';

class Heading {
	name: string;
	elements: any;

	constructor() {
		this.name = 'heading';
		this.elements = {
			headings: {
				h2: document.querySelectorAll('.heading--h2')
			}
		};
	};

	init = () => {
		if (!document.querySelector('.js-heading')) return false;
		this.setupAnimation();
	};

	setupAnimation = () => {
		const elements: any[] = gsap.utils.toArray(this.elements.headings.h2);
		elements.forEach((item, index) => {
			gsap.to(item, { x: 160, duration: 30, yoyo: true, repeat: -1, ease: 'power2.easeInOut', delay: -index * 3 });
		});
	};

};

export default Heading;