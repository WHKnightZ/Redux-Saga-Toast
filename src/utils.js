import axios from 'axios';
import { store } from './store';

const CREATE_TOAST = 'CREATE_TOAST';
const REMOVE_TOAST = 'REMOVE_TOAST';

export const createToastSuccess = (message, duration = 3000) => {
  const payload = { message, duration, type: 0 };
  store.dispatch({ type: CREATE_TOAST, payload });
};

export const createToastError = (message, duration = 3000) => {
  const payload = { message, duration, type: 1 };
  store.dispatch({ type: CREATE_TOAST, payload });
};

export const createToastWarning = (message, duration = 3000) => {
  const payload = { message, duration, type: 2 };
  store.dispatch({ type: CREATE_TOAST, payload });
};

export const createToastInfo = (message, duration = 3000) => {
  const payload = { message, duration, type: 3 };
  store.dispatch({ type: CREATE_TOAST, payload });
};

export const removeToast = (key) => {
  store.dispatch({ type: REMOVE_TOAST, payload: key });
};

const createHeaders = (token) => {
  let headers = { 'content-type': 'application/json' };
  if (token) headers = { ...headers, Authorization: token };
  return {
    headers: headers,
  };
};

export const get = (api, token) => {
  const headers = createHeaders(token);
  return axios.get(api, headers);
};

export const post = (api, data, token) => {
  const headers = createHeaders(token);
  return axios.post(api, data, headers);
};

export const put = (api, data, token) => {
  const headers = createHeaders(token);
  return axios.put(api, data, headers);
};

export const del = (api, token) => {
  const headers = createHeaders(token);
  return axios.delete(api, headers);
};
