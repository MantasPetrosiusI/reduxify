import { combineReducers } from "redux";
const initialState = [];

const searchResults = (state = initialState, action) => {
  switch (action.type) {
    case "SAVE_SEARCH_RESULTS":
      return action.payload;
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  searchResults: searchResults,
});

export default rootReducer;
