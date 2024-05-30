import './contact.scss';

function createContact() {
    const contact = document.createElement('div');

    contact.classList.add('contact');

    contact.innerHTML = `
    <div class="contact-top">
        <h1 class="contact-title">
        Keep up to date with us
        <h1>
        <p>Lorem ipsum dolor</p>
    </div>
    <div class="contact-footer">
        <i class="fa-solid fa-phone"></i>
        <p class="phone-number">+39 06 66 12 3456</p>
    </div>
    `

    return contact;
}

export default createContact;