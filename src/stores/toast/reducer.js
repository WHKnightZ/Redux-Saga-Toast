const CREATE_TOAST = 'CREATE_TOAST';
const REMOVE_TOAST = 'REMOVE_TOAST';

const initialState = [];

let toastKey = 0;

export const toastReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_TOAST:
      toastKey += 1;
      return [...state, { ...action.payload, key: toastKey }];
    case REMOVE_TOAST:
      return state.filter((s) => s.key !== action.payload);
    default:
      return state;
  }
};
