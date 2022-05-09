import { gsap } from 'gsap';

class Services {
	name: string;
	elements: any;

	constructor() {
		this.name = 'services';
		this.elements = {
			accordion: {
				items: document.querySelectorAll('.accordion__item'),
				headings: document.querySelectorAll('.item__heading'),
				contents: document.querySelectorAll('.item__content'),
				active: document.querySelector('.accordion__item--active')
			},
			preview: {
				images: document.querySelectorAll('.preview__image'),
				active: document.querySelector('.preview__image--active')
			}
		}; 
	}

	init = () => {
		if (!document.querySelector(`.js-${this.name}`)) return; 
		this.addEventListener();
	};

	addEventListener = () => { 
		window.addEventListener('resize', this.updateAccordion);
		window.addEventListener('load', this.updateAccordion);
		this.elements.accordion.items.forEach((item: HTMLElement) => {
			item.addEventListener('click', () => {
				this.elements.accordion.active = item;	
				this.elements.preview.active = document.querySelector(`img[data-preview-image="${item.getAttribute('data-preview-image')}"]`);	
				if (!item.classList.contains('accordion__item--active')) {
					this.updateAccordion();
					this.updatePreview();
				}
			});
		});
	};

	updateAccordion = () => {
		this.elements.accordion.items.forEach((item: HTMLElement) => {
			const content = item.querySelector('.item__content');
			item.classList.remove('accordion__item--active');
			gsap.to(content, { maxHeight: '0', opacity: 0, duration: 0.3, ease: 'none' });
		});
		const activeItem = this.elements.accordion.active;
		const activeContent = this.elements.accordion.active.querySelector('.item__content');
		const activeContentHeight = activeContent.scrollHeight + 'px';
		activeItem.classList.add('accordion__item--active');
		gsap.to(activeContent, { maxHeight: activeContentHeight, duration: 0.3, opacity: 1, ease: 'none' });
	};

	updatePreview = () => {
		this.elements.preview.images.forEach((item: HTMLElement) => {
			item.classList.remove('preview__image--active');
		});
		this.elements.preview.active.classList.add('preview__image--active');
	};

}

export default Services;