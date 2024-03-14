import axios from 'axios';

export const userServiceMe = (): Promise<any> => {
  return axios
    .get(`http://localhost:3001/api/users/me`, {
      withCredentials: true,
    })
    .then((res) => res.data);
};
