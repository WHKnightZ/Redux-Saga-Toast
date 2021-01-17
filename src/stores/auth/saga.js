import { takeLatest, put } from 'redux-saga/effects';
import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE } from './actions';
import { createToastError } from '../../utils';
import config, { post } from '../../config';

function* workerLogin(action) {
  try {
    const data = (yield post(config.rest.signIn(), JSON.stringify(action.payload))).data;
    if (!data.message.status) throw { message: data.message.text };

    createToastError(data.message.text);
    yield put({ type: LOGIN_SUCCESS });
  } catch (error) {
    if (error.message) createToastError(error.message);
    else if (error.response) createToastError('Error code: ' + error.response.status);
    else createToastError(config.message.signInFailure);
    yield put({ type: LOGIN_FAILURE });
  }
}

export function* watcherLogin() {
  yield takeLatest(LOGIN_REQUEST, workerLogin);
}
