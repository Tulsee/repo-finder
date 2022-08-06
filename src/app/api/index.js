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
      // console.log(err);
    });
};

const getUserRepoByUsername = async (username) => {
  return await axios
    .get(`${baseURL}${username}/repos?per_page=10&page=2&sort=created:asc`)
    .then((res) => {
      return res;
    })
    .catch((err) => console.log(err));
};
export { getUserDataByUsername, getUserRepoByUsername };
