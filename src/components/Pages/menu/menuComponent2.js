import './menu.scss';
import saladImg from '../../../assets/images/top-view-salad.jpg';

function createSaladMenu() {
  const saladContainer = document.createElement('div');
  saladContainer.id = 'menu-container';
  const title = document.createElement('h1');
  title.innerHTML= "Salads"
  saladContainer.appendChild(title);
  
  const salads = document.createElement('div');
  salads.classList.add('menu'); 
  
  const col1 = createCol1();
  const col2 = createCol2();

  salads.appendChild(col1);  
  salads.appendChild(col2);
  
  saladContainer.appendChild(salads);
  
  return saladContainer;
}

function createCol1() {
  const col1 = document.createElement('div');
  col1.classList.add('col');
  
  const imageWrapper = document.createElement('div');
  imageWrapper.classList.add('image-wrapper');
  const image = new Image();
  image.src = saladImg;
  imageWrapper.appendChild(image);

  col1.appendChild(imageWrapper);  
  return col1;
}

function createCol2() {
  const col2 = document.createElement('div');
  col2.classList.add('col');

  const ul = document.createElement('ul');
  
  const items = [
    {
      title: 'Caesar Salad €12.99',
      description: 'Crisp romaine lettuce tossed with Caesar dressing, croutons, and Parmesan cheese. Topped with grilled chicken breast for a perfect balance of flavors.',
    },
    {
      title: 'Greek Salad €10.49',
      description: 'A refreshing mix of cucumbers, tomatoes, Kalamata olives, and feta cheese, all drizzled with a tangy Greek dressing. Perfect for a light and healthy meal.',
    },
    {
      title: 'Asian Chicken Salad €14.99',
      description: 'A blend of crisp lettuce, shredded cabbage, carrots, and mandarin oranges, topped with grilled chicken and crunchy wonton strips. Served with a sesame-ginger dressing.',
    },
    {
      title: 'Spinach and Strawberry Salad  €11.29',
      description: 'Fresh baby spinach leaves combined with juicy strawberries, candied pecans, and goat cheese. Finished with a light balsamic vinaigrette.',
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

  col2.appendChild(ul);

  return col2;
}

export default createSaladMenu;
