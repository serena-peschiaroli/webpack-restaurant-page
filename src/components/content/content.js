import './content.scss';

function createContent() {
  const content = document.createElement('div');
  content.classList.add('content');

  const p = document.createElement('p');
  p.textContent = 'This is the content of the restaurant page.';

  content.appendChild(p);
  return content;
}

export default createContent;
