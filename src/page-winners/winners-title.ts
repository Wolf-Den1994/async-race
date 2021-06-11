import { winners } from './winners';

export const mainSubTitleWinners = document.createElement('h3');
mainSubTitleWinners.className = 'main-winners-subtitle';
winners.prepend(mainSubTitleWinners);

export const mainTitleWinners = document.createElement('h2');
mainTitleWinners.className = 'main-winners-title';
winners.prepend(mainTitleWinners);
