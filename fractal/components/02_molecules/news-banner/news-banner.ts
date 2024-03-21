class NewsBanner {
	name: string;
	teamMembers: NodeList;
	links: NodeList;
	banner: Element;
	closeButton: Element;
	activeTeamMember: null | string;
	closeButtons: NodeList; 

	constructor() {
		this.name = 'news-banner';
		this.banner = document.querySelector('.news-banner');
		this.closeButton = document.querySelector('.news-banner__close');
	};

	init = () => {
		if (!document.querySelector(`.js-${this.name}`)) return;
		this.addEventlistener();
		this.checkCookie();
	};

	checkCookie = () => {
		const hasShown = sessionStorage.getItem('news-banner-has-shown');
		if (!hasShown) {
			setTimeout(() => {
				this.showBanner();
			}, 3000);
		};
	};

	addEventlistener = () => {
		this.closeButton.addEventListener('click', () => {
			sessionStorage.setItem('news-banner-has-shown', 'true');
			this.hideBanner();
		});
	};

	showBanner = () => {
		this.banner.classList.add('news-banner--visible');
	};

	hideBanner = () => {
		this.banner.classList.remove('news-banner--visible');
	};



}

export default NewsBanner;