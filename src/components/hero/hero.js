import './hero.scss';

function createHero() {
  const heroContainer = document.createElement('section');
  heroContainer.id = "hero-container";

  const hero = document.createElement('div');
  hero.classList.add('hero');

  const firstContainer = document.createElement('div');
  firstContainer.classList.add('first-container');

  const discount = document.createElement('div');
  discount.classList.add('discount');
  discount.innerHTML = `
    <p>40%</p>
    <p>BUSINESS LUNCH</p>
  `;

  const textContainer = document.createElement('div');
  textContainer.classList.add('text-container');
  const heading = document.createElement('h1');
  heading.textContent = 'Where every ingredient tells a story';
  textContainer.appendChild(heading);

  const btnWrapper = document.createElement('div');
  btnWrapper.classList.add('btn-wrapper');
  const button = document.createElement('button');
  button.classList.add('heroBtn');
  button.textContent = 'READ MORE';
  btnWrapper.appendChild(button);

  firstContainer.appendChild(discount);
  hero.appendChild(firstContainer);
  hero.appendChild(textContainer);
  hero.appendChild(btnWrapper);
  
  heroContainer.appendChild(hero);

  return heroContainer;
}

export default createHero;
