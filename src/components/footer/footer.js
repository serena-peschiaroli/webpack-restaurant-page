import './footer.scss';

function createFooter() {
  const footer = document.createElement('footer');
  footer.classList.add('footer');

  const p = document.createElement('p');
  p.textContent = '© 2024 Restaurant. All rights reserved.';

  footer.appendChild(p);
  return footer;
}

export default createFooter;
