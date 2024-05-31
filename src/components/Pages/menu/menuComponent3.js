import './menu.scss';
import dessertImg from '../../../assets/images/desserts-2.jpg';

function createDessertMenu() {
  const dessertContainer = document.createElement('div');
  dessertContainer.id = 'menu-container';
  const title = document.createElement('h1');
  title.innerHTML= "Desserts"
  dessertContainer.appendChild(title);
  
  const desserts = document.createElement('div');
  desserts.classList.add('menu'); 
  
  const col1 = createCol1();
  const col2 = createCol2();

  desserts.appendChild(col1);  
  desserts.appendChild(col2);
  
  dessertContainer.appendChild(desserts);
  
  return dessertContainer;
}

function createCol1() {
  const col1 = document.createElement('div');
  col1.classList.add('col');
  
  const imageWrapper = document.createElement('div');
  imageWrapper.classList.add('image-wrapper');
  const image = new Image();
  image.src = dessertImg;
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
      title: 'Chocolate Lava Cake €8.99',
      description: 'A rich and gooey chocolate cake with a molten chocolate center, served with a scoop of vanilla ice cream and a drizzle of raspberry sauce.',
    },
    {
      title: 'Classic Tiramisu €7.50',
      description: 'Layers of espresso-soaked ladyfingers, mascarpone cheese, and cocoa powder, garnished with a dusting of cocoa and a hint of coffee liqueur.',
    },
    {
      title: 'Lemon Berry Tart €6.99',
      description: 'A crisp tart shell filled with zesty lemon curd and topped with a medley of fresh berries, finished with a light dusting of powdered sugar.',
    },
    {
      title: 'Crème Brûlée  €7.75',
      description: 'A silky-smooth vanilla custard topped with a layer of caramelized sugar, served with a side of fresh seasonal fruits.',
    },
    {
      title: 'Salted Caramel Cheesecake  €8.25',
      description: 'Creamy cheesecake infused with rich caramel and a touch of sea salt, set on a buttery graham cracker crust and topped with whipped cream.',
    },
     {
      title: 'Mango Sticky Rice  €6.50',
      description: 'Sweet coconut sticky rice paired with slices of ripe mango, garnished with toasted sesame seeds and a drizzle of coconut cream.',
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

export default createDessertMenu;
