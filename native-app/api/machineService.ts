import axios from 'axios';
import { apiRoot } from './utils';

export async function fetchMachineHealth(machineData) {
  try {
    const response = await axios.post(`${apiRoot}/machine-health`, {
      machines: machineData?.machines,
    });
    return response.data;
  } catch (error) {
    throw error;
  }
}
