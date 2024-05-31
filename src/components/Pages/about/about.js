import '../../../styles/main.scss';
import createHeader from '../../header/header';
import createFooter from '../../footer/footer';
import createAboutComponent from './aboutComponent1';
import createMiddleComponent from './aboutComponent2';
import createAboutComponentThird from './aboutComponent3';
import createBlog from '../../blog/blog';
import createSubscribe from '../../subscribe/subscribe';
import createCta from '../../cta/cta';

function createAboutPage(){
    const aboutPage = document.createElement('div');
    const header = createHeader();
    const aboutComponent = createAboutComponent();
    const middleComponent = createMiddleComponent();
    const aboutComponent3 = createAboutComponentThird();
    const blog = createBlog();
    const subscribe = createSubscribe();
    const cta = createCta();

    const footer = createFooter();

    aboutPage.appendChild(header);
    aboutPage.appendChild(aboutComponent);
    aboutPage.appendChild(middleComponent);
    aboutPage.appendChild(aboutComponent3);
    aboutPage.appendChild(blog);
    aboutPage.appendChild(subscribe);
    aboutPage.appendChild(cta);
    
    aboutPage.appendChild(footer);


    return aboutPage

    
}

export default createAboutPage;