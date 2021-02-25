import { combineReducers } from "redux";
import { SAVE_SEARCH } from "./actions";

const initialState = {
  search: [],
  article: {},
};

const addSearch = (state = initialState.search, action) => {
  switch (action.type) {
    case "SAVE_SEARCH":
      return [...state, { id: action, query: action.query }];

    default:
      return state;
  }
};

const searchArticle = (state = initialState.article, action) => {
  switch (action.type) {
    case "SEARCH_ARTICLE":
      return action.results;
    default:
      return state;
  }
};

export default combineReducers({
  addSearch,
  searchArticle,
});
