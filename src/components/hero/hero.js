import './hero.scss';

function createHero() {
  const hero = document.createElement('div');
  hero.classList.add('hero');

  hero.innerHTML = `
    <div class="first-container">
      <div class="discount">
        <p>40%</p>
        <p>BUSINESS LUNCH</p>
      </div>
    </div>
    <div class="text-container">
      <h1>Where every ingredient tells a story</h1>
    </div>
    <div class="btn-wrapper">
      <button class="heroBtn">READ MORE</button>
    </div>
  `;

  return hero;
}

export default createHero;
