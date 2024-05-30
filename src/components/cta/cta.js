import './cta.scss';

function createCta() {
  const ctaContainer = document.createElement('section');
  ctaContainer.id = 'cta-container';
  
  const cta = document.createElement('div');
  cta.classList.add('cta');
  
  const col1 = createCol1();
  const col2 = createCol2();

  cta.appendChild(col1);
  cta.appendChild(col2);
  
  ctaContainer.appendChild(cta);
  
  return ctaContainer;
}

function createCol1() {
  const col1 = document.createElement('div');
  col1.classList.add('col');
  
  const discountDiv = document.createElement('div');
  discountDiv.classList.add('first-container');
  discountDiv.innerHTML = `
    <div class="discount">
      <p>40%</p>
      <p>BUSINESS LUNCH</p>
    </div>
  `;

  const textContainer = document.createElement('div');
  textContainer.classList.add('text-container');
  textContainer.innerHTML = `<h1>Our Contact</h1>`;

  const btnWrapper = document.createElement('div');
  btnWrapper.classList.add('btn-wrapper');
  const button = document.createElement('button');
  button.classList.add('heroBtn');
  button.textContent = 'Read More';
  btnWrapper.appendChild(button);

  col1.appendChild(discountDiv);
  col1.appendChild(textContainer);
  col1.appendChild(btnWrapper);
  
  return col1;
}

function createCol2() {
  const col2 = document.createElement('div');
  col2.classList.add('col');

  const ul = document.createElement('ul');
  
  const contacts = [
    {
      icon: 'fa-envelope',
      title: 'CHART TO US',
      description: 'Our friendly team is here to help.',
      details: `<a href="mailto:hi@ourcompany.com">hi@ourcompany.com</a>`
    },
    {
      icon: 'fa-location-dot',
      title: 'OFFICE',
      description: 'Come say hello at our office HQ.',
      details: `121 Rock Street, 21 Avenue,<br>New York, NY 92103-9000`
    },
    {
      icon: 'fa-phone-volume',
      title: 'PHONE',
      description: 'Mon-Fri from 8am to 5am',
      details: `<a href="tel:+1555000000">+1(555) 000-000</a>`
    }
  ];

  contacts.forEach(contact => {
    const li = document.createElement('li');
    
    const iconWrapper = document.createElement('div');
    iconWrapper.classList.add('icon-wrapper');
    const icon = document.createElement('i');
    icon.classList.add('fa-solid', contact.icon);
    iconWrapper.appendChild(icon);

    const contactDiv = document.createElement('div');
    contactDiv.classList.add('contacts');
    contactDiv.innerHTML = `
      <h6>${contact.title}</h6>
      <p>${contact.description}</p>
      <p>${contact.details}</p>
    `;
    
    li.appendChild(iconWrapper);
    li.appendChild(contactDiv);
    ul.appendChild(li);
  });

  col2.appendChild(ul);

  return col2;
}

export default createCta;
