import { btnToGarage, btnToWinners } from '../header/buttons';
import { root } from '../root/root';
import { garage } from '../page-garage/garage';
import { winners } from '../page-winners/winners';

interface IRoutes {
  [key: string]: HTMLDivElement;
}

const routes: IRoutes = {
  '/': garage,
  '/winners': winners,
};

root.insertAdjacentElement('beforeend', routes[window.location.pathname]);

const onNavigate = (pathname: string) => {
  window.history.pushState({}, pathname, window.location.origin + pathname);
  root.innerHTML = '';
  root.insertAdjacentElement('beforeend', routes[pathname]);
};

btnToGarage.onclick = () => {
  onNavigate('/');
  return false;
};
btnToWinners.onclick = () => {
  onNavigate('/winners');
  return false;
};

window.onpopstate = () => {
  root.insertAdjacentElement('beforeend', routes[window.location.pathname]);
};
