import { call, put, takeLatest } from 'redux-saga/effects';

import * as CONSTANTS from './constants';
import { forecastListSuccess, forecaseListError } from './actions';
import request from '../../utils/apiRequest';
import notify from '../../utils/notify';

export function* forecastListRequest(action) {
  try {
    const data = yield call(
      request,
      `/users/${action.city}`,
      'GET',
      null,
      false,
    );
    yield put(forecastListSuccess(data));
  } catch (err) {
    notify('error', err);
    yield put(forecaseListError(err));
  }
}

export function* weatherSaga() {
  yield takeLatest(CONSTANTS.FORECAST_LIST_REQUEST, forecastListRequest);
}
