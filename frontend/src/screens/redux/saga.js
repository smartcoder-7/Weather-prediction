import { call, put, takeLatest } from 'redux-saga/effects';

import * as CONSTANTS from './constants';
import { forecastListSuccess, forecaseListError } from './actions';
import request from '../../utils/apiRequest';
import notify from '../../utils/notify';

export function* forecastListRequest(action) {
  const requestData = {
    city: action.payload.city,
  };
  try {
    const data = yield call(request, `/weather`, 'GET', requestData, false);
    yield put(forecastListSuccess(data));
  } catch (err) {
    notify('error', err.message);
    yield put(forecaseListError(err));
  }
}

export function* weatherSaga() {
  yield takeLatest(CONSTANTS.FORECAST_LIST_REQUEST, forecastListRequest);
}
