import './hero.scss';

function createHero() {
    const hero = document.createElement('div');
    hero.classList.add('hero');

    const firstElemContainer = document.createElement('div');
    firstElemContainer.classList.add('first-container');
    hero.appendChild(firstElemContainer);

    const discount = document.createElement('div');
    discount.classList.add('discount');
    const discountPercent = document.createElement('p');
    discountPercent.innerHTML = '40%';
    discount.appendChild(discountPercent);
    const discountSubtitle = document.createElement('p');
    discountSubtitle.innerHTML = 'BUSINESS LUNCH';
    discount.appendChild(discountSubtitle);

    firstElemContainer.appendChild(discount);

    const textContainer = document.createElement('div'); // Corrected this line
    textContainer.classList.add('text-container'); // Corrected this line

    hero.appendChild(textContainer);

    const heroH1 = document.createElement('h1');
    heroH1.innerHTML = 'Where every ingredient tells a story'; // Corrected typo
    textContainer.appendChild(heroH1);

    const btnWrapper = document.createElement('div');
    btnWrapper.classList.add('btn-wrapper');

    hero.appendChild(btnWrapper);

    const heroBtn = document.createElement('button');
    heroBtn.classList.add('heroBtn');
    heroBtn.innerHTML = 'READ MORE';
    btnWrapper.appendChild(heroBtn);

    return hero;
}

export default createHero;
