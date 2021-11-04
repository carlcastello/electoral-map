import { IReduxStore } from "../../store/types";

export const mainDrawerDataSelector = (state: IReduxStore) => {
  console.log(state.mainDrawer);
  return state.mainDrawer;
}
  