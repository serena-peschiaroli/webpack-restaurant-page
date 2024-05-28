import './header.scss';

function createHeader() {
  const header = document.createElement('header');
  header.classList.add('header');

  const h1 = document.createElement('h1');
  h1.textContent = 'Welcome to Our Restaurant';

  header.appendChild(h1);
  return header;
}

export default createHeader;
