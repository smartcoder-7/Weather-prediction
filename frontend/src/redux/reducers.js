import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import { weatherReducer } from '../screens/redux/reducer';

const rootReducer = combineReducers({
  routing: routerReducer,
  app: weatherReducer,
});

export default rootReducer;
