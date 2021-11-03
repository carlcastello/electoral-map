import { IAction, IHandlers } from "./types";

export const createReducers = (initialState: any, handlers: IHandlers) => {
  return function reducer(state = initialState, action: IAction) {
    if (handlers.hasOwnProperty(action.type)) {
      return handlers[action.type](state, action.payload);
    } else {
      return state
    }
  }
}
