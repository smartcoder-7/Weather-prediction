import produce from 'immer';
import * as CONSTANTS from './constants';

const initialtate = {
  loading: false,
  list: [],
};

const weatherReducer = (state = initialtate, action) =>
  produce(state, (draft) => {
    switch (action.type) {
      case CONSTANTS.FORECAST_LIST_REQUEST:
        draft.loading = true;
        break;
      case CONSTANTS.FORECAST_LIST_FAIL:
        draft.loading = false;
        break;
      case CONSTANTS.FORECAST_LIST_SUCCESS:
        draft.list = action.payload.data;
        break;
      default:
        break;
    }
  });

export { weatherReducer };
