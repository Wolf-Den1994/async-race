const baseUrl = 'http://localhost:3000';

const path = {
  garage: '/garage',
};

export interface IData {
  name: string;
  color: string;
  id: number;
}

export async function gettings(
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
}
