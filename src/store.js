import { createStore, applyMiddleware, combineReducers } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { authReducer } from './stores/auth/reducer';
import { toastReducer } from './stores/toast/reducer';
import { watcherLogin } from './stores/auth/saga';
import { all } from 'redux-saga/effects';

const rootReducer = combineReducers({
  auth: authReducer,
  toast: toastReducer,
});

const sagaMiddleware = createSagaMiddleware();

function* rootSaga() {
  yield all([watcherLogin()]);
}

export const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);
