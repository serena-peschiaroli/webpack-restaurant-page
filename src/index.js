import createHomePage from './components/Pages/homepage/homepage';
import './styles/main.scss';

function clearApp() {
  const app = document.getElementById('app');
  app.innerHTML = '';
}

function loadPage(page) {
  clearApp();
  const app = document.getElementById('app');
  app.appendChild(page());
}

window.addEventListener('DOMContentLoaded', () => {
  loadPage(createHomePage); // Load initial content

  document.getElementById('home-btn').addEventListener('click', () => loadPage(createHomePage));
  document.getElementById('menu-btn').addEventListener('click', () => loadPage(createMenuPage));
  document.getElementById('about-btn').addEventListener('click', () => loadPage(createAboutPage));
});
