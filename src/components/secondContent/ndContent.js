import './ndcontent.scss';

function createSndContent() {
  const ndcontent = document.createElement('div');
  ndcontent.classList.add('content');

  ndcontent.innerHTML = `
    <div class="first-container">
      <div class="advertising">
        <p>OUR RESTAURANT</p>
      </div>
    </div>
    <div class="text-container">
      <h1>The magic of kitchen</h1>
    </div>
    <div class="btn-wrapper">
      <button class="heroBtn">READ MORE</button>
    </div>
  `;

  return ndcontent;
}

export default createSndContent;
