import './header.scss';
import { loadMenu, loadHome, loadAbout, loadContact } from '../../index';

export default function createHeader() {

    const headerContainer = document.createElement('section');
    headerContainer.id = 'header-container'
    const header = document.createElement('div');
    header.classList.add('header');
    const nav = document.createElement('nav');
    nav.classList.add("nav");

    const homeButton = document.createElement('button');
    homeButton.textContent = 'Home';
    homeButton.classList.add="headerBtn";
    homeButton.id = 'home-btn';

    const menuButton = document.createElement('button');
    menuButton.textContent = 'Menu';
    menuButton.id = 'menu-btn';
    menuButton.classList.add="headerBtn";

    const aboutButton = document.createElement('button');
    aboutButton.textContent = 'About';
    aboutButton.id = 'about-btn';
    aboutButton.classList.add="headerBtn";

    const contactButton = document.createElement('button');
    contactButton.textContent = 'Contact';
    contactButton.id = 'contact-btn';
    contactButton.classList.add= "headerBtn";

    nav.appendChild(homeButton);
    nav.appendChild(menuButton);
    nav.appendChild(aboutButton);
    nav.appendChild(contactButton);
    header.appendChild(nav);
    headerContainer.appendChild(header);

    return headerContainer;
}

