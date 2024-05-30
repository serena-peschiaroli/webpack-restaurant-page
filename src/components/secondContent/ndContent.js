import './ndcontent.scss';

function createSndContent() {
  const contentContainer = document.createElement('section');
  contentContainer.id = 'content-2-container';

  const ndcontent = document.createElement('div');
  ndcontent.classList.add('content');

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
  heading.textContent = 'The magic of kitchen';
  textContainer.appendChild(heading);

  const btnWrapper = document.createElement('div');
  btnWrapper.classList.add('btn-wrapper');
  const button = document.createElement('button');
  button.classList.add('heroBtn');
  button.textContent = 'READ MORE';
  btnWrapper.appendChild(button);

  firstContainer.appendChild(advertising);
  ndcontent.appendChild(firstContainer);
  ndcontent.appendChild(textContainer);
  ndcontent.appendChild(btnWrapper);
  
  contentContainer.appendChild(ndcontent);

  return contentContainer;
}

export default createSndContent;
