import { IContent } from '../interfaces/content';
import { IData } from '../interfaces/data';
import { ISuccessResponse } from '../interfaces/success';

export const controller = new AbortController();

const baseUrl = 'http://localhost:3000';

const path = {
  garage: '/garage',
  engine: '/engine',
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

interface IBody {
  name: string;
  color: string;
}

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
  if (response.status === INTERNAL_SERVER_ERROR) {
    return false;
  }
  return response.json();
};
