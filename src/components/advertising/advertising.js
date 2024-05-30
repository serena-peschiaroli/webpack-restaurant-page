import './advertising.scss';

function createTrdContent() {
  const trdContent = document.createElement('div');
  trdContent.classList.add('content');

  trdContent.innerHTML = `
    <div class="first-container">
      <div class="advertising">
        <p>OUR RESTAURANT</p>
      </div>
    </div>
    <div class="text-container">
      <h1>A new way to experience food</h1>
    </div>
    <div class="btn-wrapper">
      <button class="heroBtn">READ MORE</button>
    </div>
  `;

  return trdContent;
}

export default createTrdContent;
