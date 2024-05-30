import createHeader from './components/header/header';
import createHero from './components/hero/hero';
import createMenu from './components/menu/menu';
import createContact from './components/contact/contact';
import createContent from './components/content/content';
import createBlog from './components/blog/blog';
import createSndContent from './components/secondContent/ndContent';
import createSubscribe from './components/subscribe/subscribe';
import createCta from './components/cta/cta';

import createFooter from './components/footer/footer';
import './styles/main.scss'; 
import { create } from 'lodash';
import createTrdContent from './components/advertising/advertising';

// Ensure the containers exist before appending
const headerContainer = document.getElementById('header-container');
const heroContainer = document.getElementById('hero-container');
const menuContainer = document.getElementById('menu-container');
const contactContainer = document.getElementById('contact-container');
const contentContainer = document.getElementById('content-container');
const blogContainer = document.getElementById('blog-container');
const secondContentContainer = document.getElementById('content-2-container');

const subscribeContainer = document.getElementById('subscribe-container');
const advertisingContainer = document.getElementById('advertising-container');
const ctaContainer = document.getElementById('cta-container');
const footerContainer = document.getElementById('footer-container');

// Clear existing content to avoid duplicates
headerContainer.innerHTML = '';
heroContainer.innerHTML = '';
menuContainer.innerHTML = '';
contactContainer.innerHTML = '';
contentContainer.innerHTML = '';
blogContainer.innerHTML = '';
secondContentContainer.innerHTML = ''; 
ctaContainer.innerHTML= '';
subscribeContainer.innerHTML = '';
advertisingContainer.innerHTML= '';

footerContainer.innerHTML = '';

// Append components
headerContainer.appendChild(createHeader());
heroContainer.appendChild(createHero());
menuContainer.appendChild(createMenu());
contactContainer.appendChild(createContact());
contentContainer.appendChild(createContent());
blogContainer.appendChild(createBlog());
secondContentContainer.appendChild(createSndContent());
subscribeContainer.appendChild(createSubscribe());
advertisingContainer.append(createTrdContent());
ctaContainer.appendChild(createCta());

footerContainer.appendChild(createFooter());

console.log('Restaurant webpage is running in development mode!');
