import './blog.scss';
import foodItems1 from '../../assets/images/food_images9.jpg';
import foodItems2 from '../../assets/images/top-view-food-3.jpeg';
import foodItems3 from '../../assets/images/food_images7.jpg';
import foodItems4 from '../../assets/images/food_images8.jpg';

function createBlog() {
  const blogContainer = document.createElement('section');
  blogContainer.id = 'blog-container';
  const blog = document.createElement('div');
  blog.classList.add('blog');

  const items = [
    { name: 'Post Title', image: foodItems1, text: 'Lorem ipsum dolor sit amet' },
    { name: 'Post Title', image: foodItems2, text: 'Lorem ipsum dolor sit amet' },
    { name: 'Post Title', image: foodItems3, text: 'Lorem ipsum dolor sit amet' },
    { name: 'Post Title', image: foodItems4, text: 'Lorem ipsum dolor sit amet'},
  ];

  items.forEach(item => {
    const card = createCard(item);
    blog.appendChild(card);
  });

  blogContainer.appendChild(blog);
  return blogContainer;
}

function createCard(item) {
  const card = document.createElement('div');
  card.classList.add('blog-item');

  card.innerHTML = `
  <div class="card-top">
    <img src="${item.image}" alt="${item.name}">
    <h3>${item.name}</h3>
    </div>
    <div class="card-body">
    <p>${item.text}</p>
    </div>
    <div class="card-bottom">
    <button class="blogBtn">Read More</button>
    </div>
  `;

  return card;
}

export default createBlog;
