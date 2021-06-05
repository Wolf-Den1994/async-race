const baseUrl = 'http://localhost:3000';

const path = {
  garage: '/garage',
};

export interface IData {
  name: string;
  color: string;
  id: number;
}

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
