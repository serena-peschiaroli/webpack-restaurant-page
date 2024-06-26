import './menu.scss';
import pizzaImage from '../../assets/images/pizza.jpg';
import saladsImage from '../../assets/images/salad.jpg';
import dessertImage from '../../assets/images/dessert.jpg';
import drinksImage from '../../assets/images/drinks.jpg';

function createMenu() {
  const menuContainer = document.createElement('section');
  menuContainer.id = 'menu-container';
  const menuTitle = document.createElement('h1');
  menuTitle.innerHTML= "Our Menu";
  menuTitle.classList.add('menu_title');
  menuContainer.appendChild(menuTitle);
  const menu = document.createElement('div');
  menu.classList.add('menu');

  const items = [
    { name: 'Hot Pizza', image: pizzaImage},
    { name: 'Salads', image: saladsImage },
    { name: 'Dessert', image: dessertImage },
    { name: 'Drinks', image: drinksImage},
  ];

  items.forEach(item => {
    const card = createCard(item);
    menu.appendChild(card);
  });

  menuContainer.appendChild(menu);

  return menuContainer;
}

function createCard(item) {
  const card = document.createElement('div');
  card.classList.add('menu-item');

  card.innerHTML = `
  <div class="card-top">
    <img src="${item.image}" alt="${item.name}">
    <h3>${item.name}</h3>
    </div>
    <div class="card-bottom">
    <button class="menuBtn">Read More</button>
    </div>
  `;

  return card;
}

export default createMenu;
