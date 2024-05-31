import './about.scss';

import foodImg from '../../../assets/images/food_images6.jpg';

function createAboutComponentThird() {
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
  
  const imageWrapper = document.createElement('div');
  imageWrapper.classList.add('image-wrapper');
  const image = new Image();
  image.src = foodImg; 
  imageWrapper.appendChild(image);

  col1.appendChild(imageWrapper);  
  return col1;
}

function createCol2() {
  const col2 = document.createElement('div');
  col2.classList.add('col');

  const colTitle = document.createElement('div');
  colTitle.classList.add('advertising');
  const titleText = document.createElement('p');
  titleText.textContent = 'OUR MISSION'; 
  colTitle.appendChild(titleText);
  
  const textContainer = document.createElement('div');
  textContainer.classList.add('text-container');
  const heading = document.createElement('h1');
  heading.textContent = 'Our restaurant is a sanctuary for food enthusiasts.'; 
  textContainer.appendChild(heading);

  const colContent = document.createElement('p');
  colContent.textContent = "Our chefs, with their diverse culinary backgrounds, meticulously design each plate to delight your senses and ignite your palate."; 

  const btnWrapper = document.createElement('div');
  btnWrapper.classList.add('btn-wrapper');
  const button = document.createElement('button');
  button.classList.add('heroBtn');
  button.textContent = 'READ MORE';
  btnWrapper.appendChild(button);
  
  col2.appendChild(colTitle);
  col2.appendChild(textContainer);
  col2.appendChild(colContent);
  col2.appendChild(btnWrapper);

  return col2;
}
export default createAboutComponentThird
