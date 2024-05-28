import createHeader from './components/header/header';
import createHero from './components/hero/hero';
import createContent from './components/content/content';
import createFooter from './components/footer/footer';
import './styles/main.scss'; 

// Ensure the containers exist before appending
const headerContainer = document.getElementById('header-container');
const heroContainer = document.getElementById('hero-container');
const contentContainer = document.getElementById('content');
const footerContainer = document.getElementById('footer-container');

// Clear existing content to avoid duplicates
headerContainer.innerHTML = '';
heroContainer.innerHTML = '';
contentContainer.innerHTML = '';
footerContainer.innerHTML = '';

// Append components
headerContainer.appendChild(createHeader());
heroContainer.appendChild(createHero());
contentContainer.appendChild(createContent());
footerContainer.appendChild(createFooter());

console.log('Restaurant webpage is running in development mode!');
