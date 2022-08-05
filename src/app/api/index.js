import axios from 'axios';
import { Config } from '../Config';

const baseURL = Config.BaseUrl;

const getUserDataByUsername = async (username) => {
  return await axios
    .get(`${baseURL}${username}`)
    .then((res) => {
      return res;
    })
    .catch((err) => {
      console.log(err);
    });
};
export { getUserDataByUsername };
