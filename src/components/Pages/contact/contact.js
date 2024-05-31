import '../../../styles/main.scss';
import createFooter from '../../footer/footer';
import createHeader from '../../header/header';
import createSubscribe from '../../subscribe/subscribe';
import createCta from '../../cta/cta';

import createContactComponent from './contactComponent';

function createContactPage(){
    const contactPage = document.createElement('div');
    const header = createHeader();
    const contactComponent = createContactComponent();
    const subscribe = createSubscribe();
    const cta = createCta();
    const footer = createFooter();


    contactPage.appendChild(header);
    contactPage.appendChild(contactComponent);
    contactPage.appendChild(subscribe);
    contactPage.appendChild(cta);
    contactPage.appendChild(footer);

    return contactPage
}

export default createContactPage;