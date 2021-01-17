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

const createHeader = (token) => {
  if (!token)
    return {
      headers: {
        'content-type': 'application/json',
      },
    };
  return {
    headers: {
      'content-type': 'application/json',
      Authorization: token,
    },
  };
};

export const get = (api, token) => {
  const header = createHeader(token);
  return axios.get(api, header);
};

export const post = (api, data, token) => {
  const header = createHeader(token);
  return axios.post(api, data, header);
};

export const put = (api, data, token) => {
  const header = createHeader(token);
  return axios.put(api, data, header);
};

export const del = (api, token) => {
  const header = createHeader(token);
  return axios.delete(api, header);
};
