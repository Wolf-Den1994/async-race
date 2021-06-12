import { root } from '../root/root';
import { Tags } from '../utils/enums';

export const winners = document.createElement(Tags.DIV);
winners.className = 'winners hidden';
root.append(winners);
