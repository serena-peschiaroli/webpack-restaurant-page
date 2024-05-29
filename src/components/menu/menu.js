import './menu.scss';
import pizzaImage from '../../assets/images/pizza.jpg';
import saladsImage from '../../assets/images/salad.jpg';
import dessertImage from '../../assets/images/dessert.jpg';
import drinksImage from '../../assets/images/drinks.jpg';

function createMenu() {
  const menu = document.createElement('div');
  menu.classList.add('menu');

  const items = [
    { name: 'Hot Pizza', image: pizzaImage, description: 'Delicious hot pizza.' },
    { name: 'Salads', image: saladsImage, description: 'Fresh and healthy salads.' },
    { name: 'Dessert', image: dessertImage, description: 'Sweet and tasty desserts.' },
    { name: 'Drinks', image: drinksImage, description: 'Refreshing drinks.' },
  ];

  items.forEach(item => {
    const card = createCard(item);
    menu.appendChild(card);
  });

  return menu;
}

function createCard(item) {
  const card = document.createElement('div');
  card.classList.add('menu-item');

  card.innerHTML = `
    <img src="${item.image}" alt="${item.name}">
    <h3>${item.name}</h3>
    <p>${item.description}</p>
  `;

  return card;
}

export default createMenu;
