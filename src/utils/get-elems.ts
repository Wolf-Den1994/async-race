import { IGetElems } from "../interfaces/get-elems";

export const getElems = function getArrHtmlElems(): IGetElems {
  const cars: NodeListOf<Element> = document.querySelectorAll('.car');
  const btnsStart: NodeListOf<HTMLButtonElement> = document.querySelectorAll(
    '.btn-start',
  );
  const btnsStop: NodeListOf<HTMLButtonElement> = document.querySelectorAll(
    '.btn-stop',
  );
  const arrBtnsStart: HTMLButtonElement[] = Array.prototype.slice.call(
    btnsStart,
  );
  const arrCars: HTMLElement[] = Array.prototype.slice.call(cars);
  const arrBtnsStop: HTMLButtonElement[] = Array.prototype.slice.call(btnsStop);

  return {
    arrCars,
    arrBtnsStart,
    arrBtnsStop,
  };
};
