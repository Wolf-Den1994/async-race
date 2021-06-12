import { IBody } from '../interfaces/body';
import { IContent } from '../interfaces/content';
import { IData } from '../interfaces/data';
import { ISuccessResponse } from '../interfaces/success';
import { IUpdateWinner } from '../interfaces/update-winner';
import { IWinner } from '../interfaces/winner';
import { objState } from '../state/general-state';

export const controller = new AbortController();

const baseUrl = 'http://localhost:3000';

const path = {
  garage: '/garage',
  engine: '/engine',
  winners: '/winners',
};

const INTERNAL_SERVER_ERROR = 500;

export const gettings = async function gettingsCars(
  page: number,
  limit = 7,
): Promise<{
    response: Response;
    data: IData[];
  }> {
  const response = await fetch(
    `${baseUrl}${path.garage}?_page=${page}&_limit=${limit}`,
    {
      method: 'GET',
    },
  );
  const data: IData[] = await response.json();
  return { response, data };
};

export const create = async function createCar(body: IBody): Promise<void> {
  await fetch(`${baseUrl}${path.garage}`, {
    method: 'POST',
    body: JSON.stringify(body),
    headers: {
      'Content-Type': 'application/json',
    },
  });
};

export const update = async function updateCar(
  body: IBody,
  id: number,
): Promise<void> {
  await fetch(`${baseUrl}${path.garage}/${id}`, {
    method: 'PUT',
    body: JSON.stringify(body),
    headers: {
      'Content-Type': 'application/json',
    },
  });
};

export const remove = async function removeCar(id: number): Promise<void> {
  await fetch(`${baseUrl}${path.garage}/${id}`, {
    method: 'DELETE',
  });
};

export const startOrStopCarEngine = async function startOrStopEngineCar(
  id: number,
  status: 'started' | 'stopped',
): Promise<{
    response: Response;
    data: IContent;
  }> {
  const response = await fetch(
    `${baseUrl}${path.engine}?id=${id}&status=${status}`,
    {
      method: 'GET',
    },
  );
  const data: IContent = await response.json();
  if (status === 'stopped') {
    objState.countDriveForRace++;
  }
  // console.log(response, data);
  return { response, data };
};

export const drive = async function switchCarEngineToDriveMode(
  id: number,
  status = 'drive',
): Promise<boolean | ISuccessResponse> {
  const response = await fetch(
    `${baseUrl}${path.engine}?id=${id}&status=${status}`,
    {
      method: 'GET',
      // signal: controller.signal
    },
  ).catch();
  // console.log(response);
  // console.log(objState)
  objState.countDriveForReset++;
  if (response.status === INTERNAL_SERVER_ERROR) {
    return false;
  }
  return response.json();
};

export const getCar = async function getCarById(id: number): Promise<IData> {
  const response = await fetch(`${baseUrl}${path.garage}/${id}`, {
    method: 'GET',
  });
  const answer: IData = await response.json();
  return answer;
};

export const getWinner = async function getWinnerById(
  id: number,
): Promise<{
    data: IWinner;
    response: Response;
  }> {
  const response = await fetch(`${baseUrl}${path.winners}/${id}`, {
    method: 'GET',
  });
  const data: IWinner = await response.json();
  return { data, response };
};

export const createWinner = async function createNewWinner(
  body: IWinner,
): Promise<void> {
  await fetch(`${baseUrl}${path.winners}`, {
    method: 'POST',
    body: JSON.stringify(body),
    headers: {
      'Content-Type': 'application/json',
    },
  });
};

export const updateWinner = async function updateOldWinner(
  id: number,
  body: IUpdateWinner,
): Promise<void> {
  await fetch(`${baseUrl}${path.winners}/${id}`, {
    method: 'PUT',
    body: JSON.stringify(body),
    headers: {
      'Content-Type': 'application/json',
    },
  });
};

export type SortType = 'id' | 'wins' | 'time';
export type OrderType = 'ASC' | 'DESC';
export const getWinners = async function getAllWinners(
  page: number,
  limit = 10,
  sort: SortType,
  order: OrderType,
): Promise<{
    response: Response;
    data: IWinner[];
  }> {
  const params = `_page=${page}&_limit=${limit}&_sort=${sort}&_order=${order}`;
  const response = await fetch(`${baseUrl}${path.winners}?${params}`, {
    method: 'GET',
  });
  const data: IWinner[] = await response.json();
  return { response, data };
};
