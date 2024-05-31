import './about.scss';



import './about.scss';
import foodImg from '../../../assets/images/steak.jpg';

function createAboutComponent() {
  const aboutContainer = document.createElement('div');
  aboutContainer.id = 'about-container'; 
  const about = document.createElement('div');
  about.classList.add('about'); 
  
  const col1 = createCol1();
  const col2 = createCol2();

  about.appendChild(col1);  
  about.appendChild(col2);
  
  aboutContainer.appendChild(about); 
  
  return aboutContainer;
}

function createCol1() {
  const col1 = document.createElement('div');
  col1.classList.add('col');

  const colTitle = document.createElement('div');
  colTitle.classList.add('advertising');
  const titleText = document.createElement('p');
  titleText.textContent = 'OUR MISSION'; 
  colTitle.appendChild(titleText);
  
  const textContainer = document.createElement('div');
  textContainer.classList.add('text-container');
  const heading = document.createElement('h1');
  heading.textContent = 'About Us'; 
  textContainer.appendChild(heading);

  const colContent = document.createElement('p');
  colContent.textContent = "Welcome Here, where culinary passion meets unforgettable dining experiences. Our restaurant is a sanctuary for food enthusiasts seeking a blend of tradition and innovation. Our mission is to create a warm and inviting atmosphere where guests can savor delectable dishes crafted from the finest locally-sourced ingredients."; 

  const btnWrapper = document.createElement('div');
  btnWrapper.classList.add('btn-wrapper');
  const button = document.createElement('button');
  button.classList.add('heroBtn');
  button.textContent = 'READ MORE';
  btnWrapper.appendChild(button);
  
  col1.appendChild(colTitle);
  col1.appendChild(textContainer);
  col1.appendChild(colContent);
  col1.appendChild(btnWrapper);

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

export default createAboutComponent;
