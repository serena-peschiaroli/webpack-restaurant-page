import './contact.scss';

function createContact() {
  const contactContainer = document.createElement('div');
  contactContainer.id = 'contact-container';

  const contact = document.createElement('div');
  contact.classList.add('contact');

  const contactTop = document.createElement('div');
  contactTop.classList.add('contact-top');

  const contactTitle = document.createElement('h1');
  contactTitle.classList.add('contact-title');
  contactTitle.textContent = 'Keep up to date with us';

  const contactDescription = document.createElement('p');
  contactDescription.textContent = 'Lorem ipsum dolor';

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
