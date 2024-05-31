import './contact.scss'

function createContactComponent() {
    const contactContainer = document.createElement('div');
    contactContainer.id = 'contacts-wrapper';

    const contact = document.createElement('div');
    contact.classList.add('contacts');

    const contactHeader = document.createElement('div');
    contactHeader.classList.add('contacts-header');

    const title = document.createElement('h1');
    title.textContent = 'Contact Us';

    const description = document.createElement('p');
    description.textContent = 'Article evident arrived express highest men did boy. Mistress sensible entirely am so. Quick can manor smart money hopes worth too. Comfort produce husband boy her had hearing. Law others theirs passed but wishes.';

    contactHeader.appendChild(title);
    contactHeader.appendChild(description);

    const form = document.createElement('form');
    form.classList.add('contacts-form');

    const groupWrapper = document.createElement('div');
    groupWrapper.classList.add('group-wrapper');

    const emailGroup = document.createElement('div');
    emailGroup.classList.add('form-group');

    const emailLabel = document.createElement('label');
    emailLabel.setAttribute('for', 'email');
    emailLabel.textContent = 'Email';

    const emailInput = document.createElement('input');
    emailInput.type = 'email';
    emailInput.id = 'email';
    emailInput.placeholder = 'Enter a valid email address';

    emailGroup.appendChild(emailLabel);
    emailGroup.appendChild(emailInput);

    const nameGroup = document.createElement('div');
    nameGroup.classList.add('form-group');

    const nameLabel = document.createElement('label');
    nameLabel.setAttribute('for', 'name');
    nameLabel.textContent = 'Name';

    const nameInput = document.createElement('input');
    nameInput.type = 'text';
    nameInput.id = 'name';
    nameInput.placeholder = 'Enter your Name';

    nameGroup.appendChild(nameLabel);
    nameGroup.appendChild(nameInput);

    groupWrapper.appendChild(nameGroup);
    groupWrapper.appendChild(emailGroup);

    const messageGroup = document.createElement('div');
    messageGroup.classList.add('form-group');

    const messageLabel = document.createElement('label');
    messageLabel.setAttribute('for', 'message');
    messageLabel.textContent = 'Message';

    const messageTextarea = document.createElement('textarea');
    messageTextarea.id = 'message';
    messageTextarea.placeholder = 'Enter your message';

    messageGroup.appendChild(messageLabel);
    messageGroup.appendChild(messageTextarea);

    const btnWrapper = document.createElement('div');
    btnWrapper.classList.add('btn-wrapper');

    const submitButton = document.createElement('button');
    submitButton.type = 'submit';
    submitButton.classList.add('submit-btn');
    submitButton.textContent = 'SUBMIT';
    btnWrapper.appendChild(submitButton);

    form.appendChild(groupWrapper);
    form.appendChild(messageGroup);
    form.appendChild(btnWrapper);

    contact.appendChild(contactHeader);
    contact.appendChild(form);

    contactContainer.appendChild(contact);

    return contactContainer;
}

export default createContactComponent;
