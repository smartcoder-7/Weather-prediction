import produce from 'immer';
import * as CONSTANTS from './constants';

const initialtate = {
  isLoading: false,
  city: '',
  list: [],
};

const weatherReducer = (state = initialtate, action) =>
  produce(state, (draft) => {
    switch (action.type) {
      case CONSTANTS.FORECAST_LIST_REQUEST:
        draft.isLoading = true;
        break;
      case CONSTANTS.FORECAST_LIST_FAIL:
        draft.isLoading = false;
        break;
      case CONSTANTS.FORECAST_LIST_SUCCESS:
        draft.list = action.payload;
        draft.isLoading = false;
        break;
      case CONSTANTS.SET_CITY:
        draft.city = action.city;
        break;
      default:
        break;
    }
  });

export { weatherReducer };
