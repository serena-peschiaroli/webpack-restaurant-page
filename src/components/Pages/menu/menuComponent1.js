import './menu.scss';
import foodImg from '../../../assets/images/steak2.jpg';

function createMealsMenu() {
  const mealsContainer = document.createElement('div');
  const title = document.createElement('h1');
  title.innerHTML= "Hot Dishes"
  mealsContainer.appendChild(title);
  mealsContainer.id = 'menu-container';
  
  const meals = document.createElement('div');
  meals.classList.add('menu'); 
  
  const col1 = createCol1();
  const col2 = createCol2();

  meals.appendChild(col1);  
  meals.appendChild(col2);
  
  mealsContainer.appendChild(meals);
  
  return mealsContainer;
}


function createCol1() {
  const col1 = document.createElement('div');
  col1.classList.add('col');

  const ul = document.createElement('ul');
  
  const items = [
    {
      title: 'Chicken Pot Pie €15.99',
      description: 'A classic comfort dish filled with tender chicken, peas, carrots, and a creamy sauce, all encased in a flaky, buttery crust.',
    },
    {
      title: 'Meatloaf with Mashed Potatoes €14.49', 
      description: 'Juicy, flavorful meatloaf served with creamy mashed potatoes and a rich brown gravy. A timeless home-cooked favorite.',
    },
    {
      title: 'Beef Stroganoff €17.29',
      description: 'Tender strips of beef cooked in a savory mushroom and onion sauce, served over a bed of egg noodles. Perfect for a hearty dinner.',
    },
    {
      title: 'Shepherd s Pie €14.99',
      description: 'A hearty casserole with ground lamb, mixed vegetables, and a savory gravy, topped with creamy mashed potatoes and baked to golden perfection.',
    },
  ];

  items.forEach(item => {
    const li = document.createElement('li');

    const itemDiv = document.createElement('div');
    itemDiv.classList.add('items');
    itemDiv.innerHTML = `
      <h6>${item.title}</h6>
      <p>${item.description}</p>
    `;

    li.appendChild(itemDiv);
    ul.appendChild(li);
  });

  col1.appendChild(ul);

  return col1;
}

function createCol2() {
  const col2 = document.createElement('div');
  col2.classList.add('col');
  
  const imageWrapper = document.createElement('div');
  imageWrapper.classList.add('image-wrapper');
  const image = new Image();
  image.src = foodImg;
  imageWrapper.appendChild(image);

  col2.appendChild(imageWrapper);  
  return col2;
}



export default createMealsMenu;
