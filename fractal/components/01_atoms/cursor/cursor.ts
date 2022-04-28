import { gsap } from 'gsap';
import { mainInterface, positionInterface, followerInterface } from './cursor.model';

class Cursor {
	position: positionInterface;
	main: mainInterface;
	follower: followerInterface;

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
	}
	
	init = () => {
		if (this.main.element && this.follower.element) {
			window.addEventListener('pointermove', (event) => this.updateCursorPosition(event), true);
		}
	};

	moveMain = () => {
		gsap.set(this.main.element, {
			top: this.position.y,
			left: this.position.x,
			duration: 0.6
		});
	};

	moveFollower = () => {
		if (!this.follower.isStuck) {
			gsap.to(this.follower.element, {
				top: this.position.y,
				left: this.position.x,
				transform: 'translate(-50%, -50%)',
				duration: 0.3, 
				ease: "power4.easeInOut"
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
	
}

export default Cursor;