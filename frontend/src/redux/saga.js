import { all, fork } from 'redux-saga/effects';

import { weatherSaga } from '../screens/redux/saga';

export default function* root() {
  yield all([fork(weatherSaga)]);
}
