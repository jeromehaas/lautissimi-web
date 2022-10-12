import { gsap } from 'gsap';
import { mainInterface, positionInterface, followerInterface } from './cursor.model';

class Cursor {
	position: positionInterface;
	main: mainInterface;
	follower: followerInterface;
	targets: NodeList[];

	constructor() {
		this.position = {
			x: 0,
			y: 0
		};
		this.main = {
			element: document.querySelector('.cursor__main')
		};
		this.follower = {
			element: document.querySelector('.cursor__follower'), 
			isStuck: false
		};
		this.targets = [
			document.querySelectorAll('.desktop-navigation__button'),
			document.querySelectorAll('.desktop-navigation__link'),
			document.querySelectorAll('.references__slider .slider__item'),
			document.querySelectorAll('.hero__panel .panel__scroller'),
			document.querySelectorAll('.references__controls .controls__arrow'),
			document.querySelectorAll('.about__links .external-link'),
			document.querySelectorAll('.about__links .external-link'),
			document.querySelectorAll('.contact-form__disclaimer  a'),
			document.querySelectorAll('.footer__links .gravity-link'),
			document.querySelectorAll('.contact-form .circle-link'),
			document.querySelectorAll('.footer__address .item__icon'),
			document.querySelectorAll('.footer__links .links__item'),
			document.querySelectorAll('.team-member .circle-link'),
			document.querySelectorAll('.reference-overview__container .item'),
			document.querySelectorAll('.reference-detail__showcase .switcher__preview'),
			document.querySelectorAll('.reference-detail__panel .back-link'),
			document.querySelectorAll('.reference-detail__showcase .controls__angle'),
		];
	};

	
	init = () => {
		if (this.main.element && this.follower.element) {
			document.body.style.cursor = 'none';
			window.addEventListener('pointermove', (event) => this.updateCursorPosition(event), true);
			this.setupTargets();
		}
	};

	moveMain = () => {
		gsap.set(this.main.element, {
			top: this.position.y,
			left: this.position.x,
		});
	};

	moveFollower = () => {
		if (!this.follower.isStuck) {
			gsap.to(this.follower.element, {
				top: this.position.y,
				left: this.position.x,
				transform: 'translate(-50%, -50%)',
				duration: 0.3, 
				ease: 'power4.easeIn'
			});
		}
	};
	
	updateCursorPosition = (event: MouseEvent) => {
		this.position.x = event.clientX;
		this.position.y = event.clientY;
		window.requestAnimationFrame(() => {
			this.moveMain();
			this.moveFollower();
		});
	};
	
	setupTargets = () => {
		this.targets.forEach((group: NodeList) => {
			group.forEach((item: HTMLElement) => {
				item.addEventListener('pointerenter', () => this.activateContent());
				item.addEventListener('pointerleave', () => this.deactivateContent());
			});
		});
	};

	activateContent = () => {
		gsap.to(this.follower.element, {
			transform: 'transform: translate(-50%, -50%)', 
			width: 80,
			height: 80,
			backgroundColor: '#a89b94',
			duration: 0.6,
			ease: 'ease.inOut'
		});
	};
	
	deactivateContent = () => {
		this.follower.isStuck = false;
		gsap.to(this.follower.element, {
			transform: 'transform: translate(-50%, -50%)', 
			backgroundColor: '#a89b94',
			width: 40,
			height: 40,
			ease: 'ease.inOut',
			duration: 0.3,
		});
	};

}

export default Cursor;