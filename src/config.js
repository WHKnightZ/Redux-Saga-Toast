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