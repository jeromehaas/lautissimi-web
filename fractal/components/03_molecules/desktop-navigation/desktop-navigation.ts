import { gsap } from 'gsap';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
gsap.registerPlugin(ScrollToPlugin);

class DesktopNavigation {
	name: string;
	links: any;

	constructor() {
		this.name = 'desktop-navigation';
		this.links = {
			all: document.querySelectorAll('.desktop-navigation__link'),
			home: document.querySelector('.desktop-navigation__logo'),
			contact: document.querySelector('.desktop-navigation .shortcuts__button'),
		};
	}

	init = () => {
		if (!document.querySelector(`.js-${this.name}`)) return;
		this.setupScrollToSection();
		this.setupScrollToContact();
		this.setupBackToHome();
	};

	setupScrollToSection = () => {
		this.links.all.forEach((item: HTMLElement) => {
			const target = item.getAttribute('data-target');
			item.addEventListener('click', (event: MouseEvent) => {
				if (
					window.location.pathname == '/' || 
					window.location.pathname == '/de' || 
					window.location.pathname == '/de/' || 
					window.location.pathname == '/en' || 
					window.location.pathname == '/en/' || 
					window.location.pathname == 'components/preview/start'
				) {
					event.preventDefault();
					gsap.to(window, { scrollTo: `.${target}`, ease: 'Power2.easeInOut', duration: 1 });
				}
			});
		});
	};

	setupScrollToContact = () => {
		this.links.contact.addEventListener('click', (event: MouseEvent) => {
			event.preventDefault();
			gsap.to(window, { scrollTo: '.footer', ease: 'Power2.easeInOut', duration: 1 });
		});
	};

	setupBackToHome = () => {
		this.links.home.addEventListener('click', (event: MouseEvent) => {
			if (
				window.location.pathname == '/' || 
				window.location.pathname == '/de' || 
				window.location.pathname == '/de/' || 
				window.location.pathname == '/en' || 
				window.location.pathname == '/en/' || 
				window.location.pathname == 'components/preview/start'
			) {
				event.preventDefault();
			}
		});
	};

}

export default DesktopNavigation;