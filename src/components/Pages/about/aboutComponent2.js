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
  middleTitle.textContent = 'Keep up to date with us';

  const middleDescription = document.createElement('p');
  middleDescription.textContent = 'Lorem ipsum dolor';

  contactTop.appendChild(contactTitle);
  contactTop.appendChild(contactDescription);

  const contactFooter = document.createElement('div');
  contactFooter.classList.add('contact-footer');

  const phoneIcon = document.createElement('i');
  phoneIcon.classList.add('fa-solid', 'fa-phone');

  const phoneNumber = document.createElement('p');
  phoneNumber.classList.add('phone-number');
  phoneNumber.textContent = '+39 06 66 12 3456';

  contactFooter.appendChild(phoneIcon);
  contactFooter.appendChild(phoneNumber);

  contact.appendChild(contactTop);
  contact.appendChild(contactFooter);

  contactContainer.appendChild(contact);

  return contactContainer;
}

export default createContact;
