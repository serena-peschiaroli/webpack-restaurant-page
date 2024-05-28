import './header.scss';

function createHeader() {
  const header = document.createElement('header');
  header.classList.add('header');

  const nav = document.createElement('nav');
  nav.innerHTML = `
  <ul>
      <li><a href="#" class="headerBtn">MENU</a></li>
      <li><a href="#" class="headerBtn">HOME</a></li>
      <li><a href="#" class="headerBtn">ABOUT</a></li>
      <li><a href="#" class="headerBtn">CONTACT</a></li>
    </ul>
  `;
  

  header.appendChild(nav);
  
  

  
  return header;
}

export default createHeader;
