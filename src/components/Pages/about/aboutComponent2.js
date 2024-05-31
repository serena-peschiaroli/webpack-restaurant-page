import './about.scss';

function createMiddleComponent() {
  const middleContainer = document.createElement('div');
  middleContainer.id = 'middle-container';

  const middle = document.createElement('div');
  middle.classList.add('middle');

  const middleTop = document.createElement('div');
  middleTop.classList.add('middle-top');

  const middleTitle = document.createElement('h1');
  middleTitle.classList.add('middle-title');
  middleTitle.textContent ='We look forward to serving you and making every visit a memorable one.';

  const middleDescription = document.createElement('p');
  middleDescription.classList.add('middle-description');
  middleDescription.textContent = 'Whether you re here for a casual lunch, a romantic dinner, or a celebration with friends and family, Restaurant offers an array of dishes that cater to every taste.';

  middleTop.appendChild(middleTitle);
  middleTop.appendChild(middleDescription);

  const middleFooter = document.createElement('div');
  middleFooter.classList.add('middle-footer');

  const button = document.createElement('button');
  button.classList.add('middle-btn');
  button.textContent = 'READ MORE';

  middleFooter.appendChild(button);

  middle.appendChild(middleTop);
  middle.appendChild(middleFooter);

  middleContainer.appendChild(middle);

  return middleContainer;
}

export default createMiddleComponent;
