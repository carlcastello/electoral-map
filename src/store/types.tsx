export interface IAction {
  type: string,
  payload: any,
}

export interface IHandlers {
  [key: string]: (state: any, payload: any) => any
}


export interface IMainDrawer {
  isOpen: boolean
}

export interface IReduxStore {
  mainDrawer: IMainDrawer
}
