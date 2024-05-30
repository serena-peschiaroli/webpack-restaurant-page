import './content.scss';

function createContent() {

  const contentContainer = document.createElement('section');
  contentContainer.id = 'content-container';
  const content = document.createElement('div');
  content.classList.add('content');

  content.innerHTML = `
    <div class="first-container">
      <div class="advertising">
        <p>OUR RESTAURANT</p>
      </div>
    </div>
    <div class="text-container">
      <h1>A culinary adventure for all the senses</h1>
    </div>
    <div class="btn-wrapper">
      <button class="heroBtn">READ MORE</button>
    </div>
  `;

  contentContainer.appendChild(content);

  return contentContainer;
}

export default createContent;
