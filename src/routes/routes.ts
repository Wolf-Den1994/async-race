import { garage } from './garage';
import { winners } from './winners';

interface IRoutes {
  [key: string]: string;
}

const routes: IRoutes = {
  '/': garage,
  '/winners': winners,
};

const rootDiv = <HTMLElement>document.getElementById('root');
rootDiv.innerHTML = routes[window.location.pathname];

const onNavigate = (pathname: string) => {
  window.history.pushState({}, pathname, window.location.origin + pathname);
  rootDiv.innerHTML = routes[pathname];
};

const linkNavbarGarage = <HTMLElement>document.querySelector('.garage');
const linkNavbarWinners = <HTMLElement>document.querySelector('.winners');

linkNavbarGarage.onclick = () => {
  onNavigate('/');
  return false;
};
linkNavbarWinners.onclick = () => {
  onNavigate('/winners');
  return false;
};

window.onpopstate = () => {
  rootDiv.innerHTML = routes[window.location.pathname];
};
