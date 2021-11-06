import { combineReducers } from "redux";
import { asideReducer } from "../components/aside/reducers";

export default combineReducers({
  asideData: asideReducer
});