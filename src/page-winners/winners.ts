import { root } from '../root/root';

export const winners = document.createElement('div');
winners.className = 'winners hidden';
winners.innerHTML = '<h1>I am winners Page.</h1>';
root.append(winners);
