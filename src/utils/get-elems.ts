import { IBtns, IElems } from '../interfaces/elems';

export const getElems = function getArrHtmlElems(): IElems {
  const cars: NodeListOf<Element> = document.querySelectorAll('.car');
  const btnsStart: NodeListOf<HTMLButtonElement> = document.querySelectorAll(
    '.btn-start',
  );
  const btnsStop: NodeListOf<HTMLButtonElement> = document.querySelectorAll(
    '.btn-stop',
  );
  const btnsSelect: NodeListOf<HTMLButtonElement> = document.querySelectorAll(
    '.btn-select',
  );
  const btnRemove: NodeListOf<HTMLButtonElement> = document.querySelectorAll(
    '.btn-remove',
  );
  const arrBtnsStart: HTMLButtonElement[] = Array.prototype.slice.call(
    btnsStart,
  );
  const arrCars: HTMLElement[] = Array.prototype.slice.call(cars);
  const arrBtnsStop: HTMLButtonElement[] = Array.prototype.slice.call(btnsStop);
  const arrBtnsSelect: HTMLButtonElement[] = Array.prototype.slice.call(
    btnsSelect,
  );
  const arrBtnsRemove: HTMLButtonElement[] = Array.prototype.slice.call(
    btnRemove,
  );

  return {
    arrCars,
    arrBtnsStart,
    arrBtnsStop,
    arrBtnsSelect,
    arrBtnsRemove,
  };
};

export const getBtns = function getBtnsContol(btn: HTMLButtonElement): IBtns {
  const btnSelect = btn.parentElement?.previousElementSibling
    ?.children[0] as HTMLButtonElement;
  const btnRemove = btn.parentElement?.previousElementSibling
    ?.children[1] as HTMLButtonElement;

  return {
    btnSelect,
    btnRemove,
  };
};
