import HelloWorld from '../../components/01_atoms/hello-world/hello-world';
import Cursor from '../../components/01_atoms/cursor/cursor';
import ContactForm from '../../components/02_molecules/contact-form/contact-form';

const helloWorld = new HelloWorld('Hello', 'World');
helloWorld.init();

const cursor = new Cursor();
cursor.init();

const contactForm = new ContactForm();
contactForm.init();