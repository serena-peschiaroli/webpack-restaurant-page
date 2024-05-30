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
    <form action="#" class="form" source="email" name="form" style="padding=0px">
    <label for"email"><i class="fa-solid fa-envelope"></i></label>
    
    <input class="email" type="email" name="email" placeholder="Enter a valid email address">
    <button class="subscribe-btn"> Submit</button>
    </form>
    </div>
    `

    return subscribe;
}

export default createSubscribe;