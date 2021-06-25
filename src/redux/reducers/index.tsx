import { combineReducers } from "redux";
import store from "./cart.reducer";
import search from "./search.reducer";

export const rootReducer = combineReducers({
  store,
  search,
});
