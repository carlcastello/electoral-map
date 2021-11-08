import { IReduxStore } from "../../store/types";

export const asideDataSelector = (state: IReduxStore) => 
  state.asideData;
  