import { LOGIN_SUCCESS } from './actions';

const initialState = {};

export const authReducer = (state = initialState, action) => {
  console.log(action);
  switch (action.type) {
    case LOGIN_SUCCESS:
      return { ...action.payload };

    default:
      return state;
  }
};
