import { fork } from 'redux-saga/effects';

import peopleSaga from './people';

function* rootSaga() {
  yield fork(peopleSaga);
}

export default rootSaga;
