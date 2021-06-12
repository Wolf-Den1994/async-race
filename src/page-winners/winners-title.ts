import { Tags } from '../utils/enums';
import { winners } from './winners';

export const mainSubTitleWinners = document.createElement(Tags.TITLE3);
mainSubTitleWinners.className = 'main-winners-subtitle';
winners.prepend(mainSubTitleWinners);

export const mainTitleWinners = document.createElement(Tags.TITLE2);
mainTitleWinners.className = 'main-winners-title';
winners.prepend(mainTitleWinners);
