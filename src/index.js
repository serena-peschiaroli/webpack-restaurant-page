import createHeader from './components/header/header';
import createHero from './components/hero/hero';
import createMenu from './components/menu/menu';
import createContact from './components/contact/contact';
import createContent from './components/content/content';
import createFooter from './components/footer/footer';
import './styles/main.scss'; 

// Ensure the containers exist before appending
const headerContainer = document.getElementById('header-container');
const heroContainer = document.getElementById('hero-container');
const menuContainer = document.getElementById('menu-container');
const contactContainer = document.getElementById('contact-container');
const contentContainer = document.getElementById('content-container');
const footerContainer = document.getElementById('footer-container');

// Clear existing content to avoid duplicates
headerContainer.innerHTML = '';
heroContainer.innerHTML = '';
menuContainer.innerHTML = '';
contactContainer.innerHTML = '';
contentContainer.innerHTML = '';
footerContainer.innerHTML = '';

// Append components
headerContainer.appendChild(createHeader());
heroContainer.appendChild(createHero());
menuContainer.appendChild(createMenu());
contactContainer.appendChild(createContact());
contentContainer.appendChild(createContent());
footerContainer.appendChild(createFooter());

console.log('Restaurant webpage is running in development mode!');
