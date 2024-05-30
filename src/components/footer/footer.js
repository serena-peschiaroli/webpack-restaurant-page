import './footer.scss';

function createFooter() {
  const footerContainer = document.createElement('section');
  footerContainer.id = 'footer-container';
  const footer = document.createElement('footer');
  footer.classList.add('footer');

  const p = document.createElement('p');
  p.textContent = '© 2024 Restaurant. All rights reserved.';

  footer.appendChild(p);
  footerContainer.appendChild(footer);

  return footerContainer;
}

export default createFooter;
