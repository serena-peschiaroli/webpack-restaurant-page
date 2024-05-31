import '../../../styles/main.scss';
import createHeader from '../../header/header';
import createFooter from '../../footer/footer';
import createAboutComponent from './aboutComponent1';
import createMiddleComponent from './aboutComponent2';

function createAboutPage(){
    const aboutPage = document.createElement('div');
    const header = createHeader();
    const aboutComponent = createAboutComponent();
    const middleComponent = createMiddleComponent();

    const footer = createFooter();

    aboutPage.appendChild(header);
    aboutPage.appendChild(aboutComponent);
    aboutPage.appendChild(middleComponent);
    aboutPage.appendChild(footer);


    return aboutPage

    
}

export default createAboutPage;