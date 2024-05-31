import createHomePage from './components/Pages/homepage/homepage';
import createMenuPage from './components/Pages/menu/menu';
import createAboutPage from './components/Pages/about/about';
import createContactPage from './components/Pages/contact/contact';
import createHeader from './components/header/header';
import './styles/main.scss';

export function clearApp() {
  const app = document.getElementById('app');
  app.innerHTML = '';
}

export function loadPage(page) {
  clearApp();
  const app = document.getElementById('app');
  app.appendChild(page());
}

window.addEventListener('DOMContentLoaded', () => {

  loadPage(createHomePage); // Load initial content
});
