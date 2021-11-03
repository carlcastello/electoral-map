import { combineReducers } from "redux";
import { mainDrawerReducer } from "../components/main-drawer/reducers";

export default combineReducers({
  mainDrawer: mainDrawerReducer
});