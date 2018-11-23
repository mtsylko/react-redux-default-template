import axios from 'axios'
import config from '../config.json'

const BASE_URL = config.baseUrl;

const getConfig = () => {
  const config =  {
    headers: {}
  };
  if(localStorage.token) {
    config.headers.Authorization = `Bearer ${localStorage.token}`;
  }
  return config;
};

export const postRequest = async (path, data) => {
  try {
    const config = getConfig();
    return await axios.post(BASE_URL + '/' + path, data, config);
  } catch (exc) {
    console.error(exc)
  }
};

export const getRequest = async (path) => {
  try {
    const config = getConfig();
    return await axios.get(BASE_URL + '/' + path, config);
  } catch (exc) {
    console.error(exc)
  }
};

