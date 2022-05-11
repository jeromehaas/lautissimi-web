import { gsap } from 'gsap';

class MobileNavigation {
	name: string;
	elements: any;
	panel: any;

	constructor() {
		this.name = 'mobile-navigation';
		this.elements = {
			hamburger: document.querySelector('.mobile-navigation .hamburger'),
			bar: document.querySelector('.mobile-navigation .bar'),
			panel: document.querySelector('.mobile-navigation .panel'),
			links: document.querySelectorAll('.mobile-navigation .links__item')
		};
		this.panel = {
			isVisible: false
		};
		console.log(this.elements);
	};
	
	init = () => {
		if (!document.querySelector(`.js-${this.name}`)) return;
		this.addEventListener();	
	};
	
	addEventListener = () => {
		window.addEventListener('scroll', this.setNavigationVisibility);
		this.elements.hamburger.addEventListener('click', this.toggleNavigation);
		this.elements.links.forEach((item: HTMLElement) => {
			item.addEventListener('click', (event: MouseEvent) => {
				event.preventDefault();
				if (window.location.pathname === '/' || window.location.pathname === '/components/preview/start') {
					const target = item.getAttribute('data-target');
					this.scrollToSection(target);
				} else {
					const target = item.getAttribute('href');
					this.navigateToPage(target);
				}
			});
		});
	};

	setNavigationVisibility = () => {
		if (window.pageYOffset > 60 && this.panel.isVisible === false) {
			this.elements.bar.classList.add('mobile-navigation__bar--hidden');
		} else {
			this.elements.bar.classList.remove('mobile-navigation__bar--hidden');
		}
	};

	navigateToPage = (target: string) => {
		document.location.href = target;
	};
	
	scrollToSection = (target: string) => {
		this.toggleNavigation();
		const timeline = gsap.timeline();
		timeline.to(window, { scrollTo: `.${target}`, ease: 'none', duration: 0 });
		timeline.to(this.elements.links, { opacity: 0, duration: 0.6, stagger: { from: 'end', amount: 0.3 }  });
		timeline.to(this.elements.panel, { top: '-100vh', duration: 0.6, ease: 'power1.easeInOut' });

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
		timeline.to(this.elements.panel, { top: 0, duration: 0.9, ease: 'power1.easeInOut' });
		timeline.to(this.elements.links, { opacity: 1, stagger: { from: 'start', amount: 0.3 } });
	};

	hidePanel = () => {
		const timeline = gsap.timeline();
		timeline.to(this.elements.links, { opacity: 0, duration: 0.6, stagger: { from: 'end', amount: 0.3 }  });
		timeline.to(this.elements.panel, { top: '-100vh', duration: 0.6, ease: 'power1.easeInOut' });
	};

}

export default MobileNavigation;