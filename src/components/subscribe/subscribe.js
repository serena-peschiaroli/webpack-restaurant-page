import { create } from 'lodash';
import './subscribe.scss';

function createSubscribe() {
    const subscribe = document.createElement('div');

    subscribe.classList.add('contact');

    subscribe.innerHTML = `
    <div class="contact-top">
    <h1 class="contact-title">
    Keep up to date with us
    <h1>
    <p>Lorem ipsum dolor</p>
    </div>
    <div class="contact-footer">
    <i class="fa-solid fa-envelope"></i>
    <input class="email" type="email" placeholder="Subscribe">
    </div>
    `

    return subscribe;
}

export default createSubscribe;