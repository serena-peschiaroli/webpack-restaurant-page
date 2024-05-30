import { create } from 'lodash';
import './cta.scss';

function createCta() {
  const cta = document.createElement('div');
  cta.classList.add('cta');

  cta.innerHTML = `
    <div class="col">
      <div class="first-container">
        <div class="discount">
          <p>40%</p>
          <p>BUSINESS LUNCH</p>
        </div>
      </div>
      <div class="text-container">
        <h1>Our Contact</h1>
      </div>
      <div class="btn-wrapper">
        <button class="heroBtn">Read More</button>
      </div>
    </div>

    <div class="col">
      <ul>
        <li>
          <div class="icon-wrapper">
            <i class="fa-solid fa-envelope"></i>
          </div>
          <div class="contacts">
            <h6>CHART TO US</h6>
            <p>Our friendly team is here to help.</p>
            <p><a href="mailto:hi@ourcompany.com">hi@ourcompany.com</a></p>
          </div>
        </li>
        <li>
          <div class="icon-wrapper">
            <i class="fa-solid fa-location-dot"></i>
          </div>
          <div class="contacts">
            <h6>OFFICE</h6>
            <p>Come say hello at our office HQ.</p>
            <p>121 Rock Street, 21 Avenue,</p>
            <p>New York, NY 92103-9000</p>
          </div>
        </li>
        <li>
          <div class="icon-wrapper">
            <i class="fa-solid fa-phone-volume"></i>
          </div>
          <div class="contacts">
            <h6>PHONE</h6>
            <p>Mon-Fri from 8am to 5am</p>
            <p><a href="tel:+1555000000">+1(555) 000-000</a></p>
          </div>
        </li>
      </ul>
    </div>
  `;

  return cta;
}

export default createCta;
