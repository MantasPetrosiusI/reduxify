import {
  SET_SEARCH_RESULTS,
  SET_LOADING,
  SET_SEARCH_QUERY,
} from "../actions/searchActions";

const initialState = {
  searchResults: null,
  loading: false,
  searchQuery: "",
};

const searchReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_SEARCH_RESULTS:
      return {
        ...state,
        searchResults: action.payload,
      };
    case SET_LOADING:
      return {
        ...state,
        loading: action.payload,
      };
    case SET_SEARCH_QUERY:
      return {
        ...state,
        searchQuery: action.payload,
      };
    default:
      return state;
  }
};

export default searchReducer;
