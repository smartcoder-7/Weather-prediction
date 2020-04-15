import * as CONSTANTS from './constants';

export function forecastListRequest(data) {
  return {
    type: CONSTANTS.FORECAST_LIST_REQUEST,
    payload: data,
  };
}

export function forecastListSuccess(data) {
  return {
    type: CONSTANTS.FORECAST_LIST_SUCCESS,
    payload: data,
  };
}

export function forecaseListError(data) {
  return {
    type: CONSTANTS.FORECAST_LIST_FAIL,
    data,
  };
}

export function setCity(city) {
  return {
    type: CONSTANTS.SET_CITY,
    city,
  };
}
