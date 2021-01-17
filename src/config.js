import axios from 'axios';

const config = {
  api: {
    baseURL: 'https://586sle2nic.execute-api.us-east-1.amazonaws.com/developer',
  },
  app: {},
  rest: {
    signIn: () => '/api/v1/user/auth/signin',
  },
  message: {
    signInFailure: 'Sign in failure.',
  },
};

export default config;

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
