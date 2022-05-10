import { gsap } from 'gsap';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
gsap.registerPlugin(ScrollToPlugin);

class DesktopNavigation {

	constructor() {
		this.name = 'desktop-navigation';
		this.links = {
			all: document.querySelectorAll('.desktop-navigation__link'),
			home: document.querySelector('.desktop-navigation__logo'),
			contact: document.querySelector('.desktop-navigation__button'),
		};
	}

	init = () => {
		if (!document.querySelector(`.js-${this.name}`)) return;
		this.setupScrollToSection();
		this.setupBackToHome();
	};

	setupScrollToSection = () => {
		this.links.all.forEach((item) => {
			const target = item.getAttribute('data-target');
			item.addEventListener('click', (event) => {
				event.preventDefault();
				gsap.to(window, { scrollTo: `.${target}`, ease: 'Power2.easeInOut', duration: 1 });
			});
		});
	};

	setupBackToHome = () => {
		this.links.home.addEventListener('click', (event) => {
			event.preventDefault();
			if (window.location.pathname !== '/' && window.location.pathname !== '/components/preview/start') {
				window.location.href = '/';
			}
		});
	};

}

export default DesktopNavigation;