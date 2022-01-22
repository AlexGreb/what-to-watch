import axios from 'axios';
import {BASE_URL, API_TIMEOUT, Errors, dataUrl} from './constants/consts.js';
import Toast, {typesIcons} from "./toast/toast.js";
import history from './history.js';

export const createApi = () => {

  const api = axios.create({
    baseURL: BASE_URL,
    timeout: API_TIMEOUT,
    withCredentials: true
  });

  const onSuccess = (response) => {
    return response;
  };

  const onFail = (err) => {
    const {response} = err;
    if (response.status === Errors.UNAUTHORIZED) {
      history.push(dataUrl.LOGIN);
      throw err;
    }
    Toast.fire({
      icon: typesIcons.ERROR,
      title: response.data.error
    });

    throw err;
  };

  api.interceptors.response.use(onSuccess, onFail);

  return api;
};
