import { combineReducers } from 'redux';
import {
  REQUEST_REDDITS,
  RECEIVE_REDDITS
} from '../actions';

// Define the `reddit` state
const reddits = (state = {
  isFetching: false,
  redditsList: []
}, action) => {
  switch (action.type) {
    case REQUEST_REDDITS:
      return {
        ...state,
        isFetching: true
      };
    case RECEIVE_REDDITS:
      return {
        ...state,
        isFetching: false,
        redditsList: action.reddits
      };
    default:
      return state;
  }
};

const redditReducer = (state = {
  isFetching: false,
  redditsList: []
}, action) => {
  switch (action.type) {
    case RECEIVE_REDDITS:
    case REQUEST_REDDITS:
      return reddits(state, action);
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  redditReducer
});

export default rootReducer;
