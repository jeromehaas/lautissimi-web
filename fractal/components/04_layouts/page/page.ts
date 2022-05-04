import { gsap } from 'gsap';

class Page {
	name: string;
	elements: any;
	height: number;

	constructor() {
		this.name = 'page';
		this.elements = {
			body: document.querySelector('.body')
		};
		this.height = this.elements.body.clientHeight;
	}

	init = () => {
		if (!document.querySelector(`.js-${this.name}`)) return;
		// this.setupSmoothScroll();
	};

	setupSmoothScroll = () => 	{
		gsap.to(this.elements.body, {
			y: -(this.height - document.documentElement.clientHeight),
			ease: 'none',
			scrollTrigger: {
				trigger: this.elements.body,
				start: 'top top',
				end: 'bottom bottom',
				// scrub: 1
			}
		});
	};

};

export default Page;