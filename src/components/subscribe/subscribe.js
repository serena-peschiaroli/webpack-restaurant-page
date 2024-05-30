import './subscribe.scss';

function createSubscribe() {
  const subscribeContainer = document.createElement('section');
  subscribeContainer.id = 'subscribe-container';

  const subscribe = document.createElement('div');
  subscribe.classList.add('subscribe');

  const subscribeTop = document.createElement('div');
  subscribeTop.classList.add('subscribe-top');

  const subscribeTitle = document.createElement('h1');
  subscribeTitle.classList.add('subscribe-title');
  subscribeTitle.textContent = 'Keep up to date with us';

  const subscribeDescription = document.createElement('p');
  subscribeDescription.classList.add('subscribe-description');
  subscribeDescription.textContent = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.';

  subscribeTop.appendChild(subscribeTitle);
  subscribeTop.appendChild(subscribeDescription);

  const subscribeFooter = document.createElement('div');
  subscribeFooter.classList.add('subscribe-footer');

  const form = document.createElement('form');
  form.action = '#';
  form.classList.add('form');
  form.name = 'form';

  const label = document.createElement('label');
  label.setAttribute('for', 'email');
  const icon = document.createElement('i');
  icon.classList.add('fa-solid', 'fa-envelope');
  label.appendChild(icon);

  const input = document.createElement('input');
  input.classList.add('email');
  input.type = 'email';
  input.name = 'email';
  input.placeholder = 'Enter a valid email address';
  input.required = true;

  const button = document.createElement('button');
  button.classList.add('subscribe-btn');
  button.textContent = 'Submit';

  form.appendChild(label);
  form.appendChild(input);
  form.appendChild(button);

  subscribeFooter.appendChild(form);

  subscribe.appendChild(subscribeTop);
  subscribe.appendChild(subscribeFooter);

  subscribeContainer.appendChild(subscribe);

  return subscribeContainer;
}

export default createSubscribe;
