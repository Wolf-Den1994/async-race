import { root } from '../root/root';
import { Tags } from '../utils/enums';

export const footer = document.createElement(Tags.FOOTER);
root.insertAdjacentElement('afterend', footer);
