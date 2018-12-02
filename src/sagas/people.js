import { call, put, takeEvery } from 'redux-saga/effects';

import API from '../services/api';
import { getPeople } from '../actions';

export function* callPeopleService() {
  return yield call(API.getPeople);
}

export function* getPeopleRequest() {
  try {
    const { data } = yield call(callPeopleService);
    yield put(
      getPeople.success({
        people: data,
      }),
    );
  } catch (error) {
    yield put(getPeople.failure(error.message));
  }
}

export default function* peopleSaga() {
  yield takeEvery(getPeople.REQUEST, getPeopleRequest);
}
