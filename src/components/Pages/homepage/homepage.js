import createHeader from '../../header/header';
import createHero from '../../hero/hero';
import createMenu from '../../menu/menu';
import createContact from '../../contact/contact';
import createContent from '../../content/content';
import createTrdContent from '../../advertising/advertising';
import createBlog from '../../blog/blog';
import createSndContent from '../../secondContent/ndContent';
import createSubscribe from '../../subscribe/subscribe';
import createCta from '../../cta/cta';
import createFooter from '../../footer/footer';
import '../../../styles/main.scss';

export default function createHomePage(){

    const homePage = document.createElement('div');

  const header = createHeader();
  const hero = createHero();
  const menu = createMenu();
  const contact = createContact();
  const blog = createBlog();
  const sndContent = createSndContent();
  const subscribe = createSubscribe();
  const advertising = createTrdContent();
  const cta = createCta();
  const content = createContent();
  const footer = createFooter();

  homePage.appendChild(header);
  homePage.appendChild(hero);
  homePage.appendChild(menu);
  homePage.appendChild(contact);
  homePage.appendChild(content);
  homePage.appendChild(blog);
  homePage.appendChild(sndContent);
  homePage.appendChild(subscribe);
  homePage.appendChild(advertising);
  homePage.appendChild(cta);
  homePage.appendChild(footer);

  return homePage;

}

