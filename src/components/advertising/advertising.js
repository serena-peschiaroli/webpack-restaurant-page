import './advertising.scss';

function createTrdContent() {
  const advertisingContainer = document.createElement('section');
  advertisingContainer.id = 'advertising-container';

  const trdContent = document.createElement('div');
  trdContent.classList.add('content');

  const firstContainer = document.createElement('div');
  firstContainer.classList.add('first-container');

  const advertising = document.createElement('div');
  advertising.classList.add('advertising');
  const advertisingText = document.createElement('p');
  advertisingText.textContent = 'OUR RESTAURANT';
  advertising.appendChild(advertisingText);

  const textContainer = document.createElement('div');
  textContainer.classList.add('text-container');
  const heading = document.createElement('h1');
  heading.textContent = 'A new way to experience food';
  textContainer.appendChild(heading);

  const btnWrapper = document.createElement('div');
  btnWrapper.classList.add('btn-wrapper');
  const button = document.createElement('button');
  button.classList.add('heroBtn');
  button.textContent = 'READ MORE';
  btnWrapper.appendChild(button);

  firstContainer.appendChild(advertising);
  trdContent.appendChild(firstContainer);
  trdContent.appendChild(textContainer);
  trdContent.appendChild(btnWrapper);

  advertisingContainer.appendChild(trdContent);

  return advertisingContainer;
}

export default createTrdContent;
