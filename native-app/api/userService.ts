import axios from 'axios';
import { apiRoot } from './utils';

export async function fetchUser(userName: string): Promise<string> {
  try {
    const response = await axios.post(`${apiRoot}/auth/login`, {
      userName,
    });
    return response?.data?.userName;
  } catch (error) {
    throw error;
  }
}
