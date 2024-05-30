import './subscribe.scss';

function createSubscribe() {
    const subscribe = document.createElement('div');
    subscribe.classList.add('subscribe');

    subscribe.innerHTML = `
        <div class="subscribe-top">
            <h1 class="subscribe-title">Keep up to date with us</h1>
            <p class="subscribe-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
        <div class="subscribe-footer">
            <form action="#" class="form" source="email" name="form">
                <label for="email"><i class="fa-solid fa-envelope"></i></label>
                <input class="email" type="email" name="email" placeholder="Enter a valid email address" required>
                <button class="subscribe-btn">Submit</button>
            </form>
        </div>
    `;

    return subscribe;
}

export default createSubscribe;
