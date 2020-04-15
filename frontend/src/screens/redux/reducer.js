import produce from 'immer';
import * as CONSTANTS from './constants';

const initialtate = {
  isLoading: false,
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
      default:
        break;
    }
  });

export { weatherReducer };
