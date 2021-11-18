import { combineReducers } from "redux";
import { asideReducer } from "../layouts/aside/reducers";

export default combineReducers({
  asideData: asideReducer
});