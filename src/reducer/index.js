import { combineReducers } from 'redux';
import { handleActions } from "redux-actions";
import * as actions from "../actions/" //Import the actions types constant we defined in our actions

// the Initial State for the app
let defaultState = {
  isLoading: true,
  images: [],
  size: 17,
  isLoadingMore: false,
};

// Reducers Introduced Here for data flows and updating state
const mainGridReducer = handleActions({
  [actions.LoadDataSuccess]: (state, {payload}) => {
    return {
      ...state,
      images: payload,
      isLoading: false
    }
  },
  [actions.LoadMoreDataSuccess]: (state, {payload}) => {
    console.log(payload)
    return {
      ...state,
      images: state.images.concat(payload),
      isLoadingMore: false
    }
  }
}, defaultState);

const rootReducer = combineReducers({
  mainGridReducer
})

export default rootReducer;