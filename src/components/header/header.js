import './header.scss';
import { loadPage } from '../../index';
import createHomePage from '../Pages/homepage/homepage';
import createMenuPage from '../Pages/menu/menu';
import createAboutPage from '../Pages/about/about';
import createContactPage from '../Pages/contact/contact';

export default function createHeader() {
  const headerContainer = document.createElement('section');
  headerContainer.id = 'header-container';
  
  const header = document.createElement('div');
  header.classList.add('header');
  
  const nav = document.createElement('nav');
  nav.classList.add('nav');

  const homeButton = document.createElement('button');
  homeButton.textContent = 'Home';
  homeButton.classList.add('headerBtn'); 
  homeButton.id = 'home-btn';
  homeButton.onclick = () => loadPage(createHomePage); 

  const menuButton = document.createElement('button');
  menuButton.textContent = 'Menu';
  menuButton.classList.add('headerBtn'); 
  menuButton.id = 'menu-btn';
  menuButton.onclick = () => loadPage(createMenuPage); 

  const aboutButton = document.createElement('button');
  aboutButton.textContent = 'About';
  aboutButton.classList.add('headerBtn'); 
  aboutButton.id = 'about-btn';
  aboutButton.onclick = () => loadPage(createAboutPage); 

  const contactButton = document.createElement('button');
  contactButton.textContent = 'Contact';
  contactButton.classList.add('headerBtn'); 
  contactButton.id = 'contact-btn';
  contactButton.onclick = () => loadPage(createContactPage); 

  nav.appendChild(homeButton);
  nav.appendChild(menuButton);
  nav.appendChild(aboutButton);
  nav.appendChild(contactButton);
  header.appendChild(nav);
  headerContainer.appendChild(header);

  return headerContainer;
}
