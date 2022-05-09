import { gsap } from 'gsap';

class MobileNavigation {
	name: string;
	elements: any;
	panel: any;

	constructor() {
		this.name = 'mobile-navigation';
		this.elements = {
			hamburger: document.querySelector('.mobile-navigation .hamburger'),
			panel: document.querySelector('.mobile-navigation .panel'),
			links: document.querySelectorAll('.mobile-navigation .links__item')
		};
		this.panel = {
			isVisible: false
		};
	};
	
	init = () => {
		if (!document.querySelector(`.js-${this.name}`)) return;
		this.addEventListener();	
	};
	
	addEventListener = () => {
		this.elements.hamburger.addEventListener('click', this.toggleNavigation);
	};

	toggleNavigation = () => {
		this.panel.isVisible = !this.panel.isVisible;
		if (this.panel.isVisible) {
			this.elements.hamburger.classList.add('hamburger--active');
			this.showPanel();	
		} else {
			this.elements.hamburger.classList.remove('hamburger--active');
			this.hidePanel();
		}
	};

	showPanel = () => {
		const timeline = gsap.timeline();
		timeline.to(this.elements.panel, { top: 0, duration: 0.9, ease: 'power2.easeIn' });
		timeline.to(this.elements.links, { opacity: 1, stagger: { from: 'start', amount: 0.3 } });
	};

	hidePanel = () => {
		const timeline = gsap.timeline();
		timeline.to(this.elements.links, { opacity: 0, duration: 0.6, stagger: { from: 'end', amount: 0.3 }  });
		timeline.to(this.elements.panel, { top: '-100vh', duration: 0.3, ease: 'power2.easeIn' });
	};

}

export default MobileNavigation;