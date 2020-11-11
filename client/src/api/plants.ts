import { request } from './apiProvider';

const fetchAllPlants = async () => {
  const endpoint = `/plants`;
  const results = await request({ endpoint, method: 'GET' });
  return results;
};

const fetchPlant = async (id: any) => {
  const endpoint = `/plants/${id}`;
  const result = await request({ endpoint, method: 'GET' });
  return result;
}

export default {
  fetchAllPlants,
  fetchPlant
};
