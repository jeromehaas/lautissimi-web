import Cursor from '../../components/01_atoms/cursor/cursor';
import ContactForm from '../../components/02_molecules/contact-form/contact-form';
import Hero from '../../components/03_molecules/hero/hero';
import Intro from '../../components/03_molecules/intro/intro';
import References from '../../components/03_molecules/references/references';
import Page from '../../components/04_layouts/page/page';
import About from '../../components/03_molecules/about/about';
import MobileNavigation from '../../components/03_molecules/mobile-navigation/mobile.navigation';

const cursor = new Cursor();
cursor.init();

const contactForm = new ContactForm();
contactForm.init();

const hero = new Hero();
hero.init();

const intro = new Intro();
intro.init();

const references = new References();
references.init();

const page = new Page();
page.init();

const about = new About();
about.init();

const mobileNavigation = new MobileNavigation();
mobileNavigation.init();