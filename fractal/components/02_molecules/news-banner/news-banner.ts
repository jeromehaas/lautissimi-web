class NewsBanner {
    name: string;
    banner: HTMLElement | null;
    closeButton: HTMLElement | null;
    cards: NodeListOf<HTMLElement>;
    currentIndex: number;
    intervalId: number | null;

    constructor() {
        this.name = 'news-banner';
        this.banner = document.querySelector('.news-banner');
        this.closeButton = document.querySelector('.news-banner__close');
        this.cards = document.querySelectorAll('.js-news-card');
        this.currentIndex = 0;
        this.intervalId = null;
    }

    init = (): void => {
        if (!document.querySelector(`.js-${this.name}`)) return;
        this.addEventListeners();
        this.checkSessionStorage();
    };

    checkSessionStorage = (): void => {
        const hasShown = sessionStorage.getItem('news-banner-has-shown');
        if (!hasShown) {
            setTimeout(() => {
                this.showBanner();
                this.startRotation();
            }, 3000);
        }
    };

    addEventListeners = (): void => {
        if (this.closeButton) {
            this.closeButton.addEventListener('click', this.handleClose);
        }
    };

    handleClose = (): void => {
        sessionStorage.setItem('news-banner-has-shown', 'true');
        this.hideBanner();
        if (this.intervalId !== null) {
            clearInterval(this.intervalId);
        }
    };

    showBanner = (): void => {
        if (this.banner) {
            this.banner.classList.add('news-banner--visible');
        }
        this.showCard(this.currentIndex);
    };

    hideBanner = (): void => {
        if (this.banner) {
            this.banner.classList.remove('news-banner--visible');
        }
        // this.hideAllCards();
    };

    startRotation = (): void => {
        this.intervalId = window.setInterval(() => {
            const previousIndex = this.currentIndex;
            this.currentIndex = (this.currentIndex + 1) % this.cards.length;
            this.transitionBanner(previousIndex, this.currentIndex);
        }, 10000);
    };

    transitionBanner = (prevIndex: number, nextIndex: number): void => {
        if (this.banner) {
            this.banner.classList.add('news-banner--exit');
        }

        setTimeout(() => {
            this.hideAllCards();
            this.cards[nextIndex]?.classList.add('news-card--active');
            if (this.banner) {
                this.banner.classList.remove('news-banner--exit');
                this.banner.classList.add('news-banner--visible');
            }
        }, 500);
    };

    showCard = (index: number): void => {
        this.hideAllCards();
        this.cards[index]?.classList.add('news-card--active');
    };

    hideAllCards = (): void => {
        this.cards.forEach((card) => card.classList.remove('news-card--active'));
    };
}

export default NewsBanner;
