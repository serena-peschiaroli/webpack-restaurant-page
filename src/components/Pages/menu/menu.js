import createHeader from '../../header/header';
import createFooter from '../../footer/footer';
import createContact from '../../contact/contact';
import createHero from '../../hero/hero';
import createCta from '../../cta/cta';
import createSaladMenu from './menuComponent2';  
import createMealsMenu from './menuComponent1';

import '../../../styles/main.scss';

function createMenuPage() {
  const menuPage = document.createElement('div');

  const header = createHeader();
  const contatComponent = createContact();
  const saladMenu = createSaladMenu(); 
  const mealMenu = createMealsMenu(); 
  const advertisingComponent = createHero();
  const ctaComponent = createCta();
  const footer = createFooter();

  menuPage.appendChild(header);
  menuPage.appendChild(contatComponent);
  menuPage.appendChild(saladMenu);
  menuPage.appendChild(mealMenu);
  menuPage.appendChild(advertisingComponent);
  menuPage.appendChild(ctaComponent);

  menuPage.appendChild(footer);

  return menuPage;
}

export default createMenuPage;
