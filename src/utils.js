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
