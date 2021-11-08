import { ICity } from '../components/aside/component/types';

export interface IAction {
  type: string,
  payload: any,
}

export interface IHandlers {
  [key: string]: (state: any, payload: any) => any
}


export interface IReduxStore {
  asideData: ICity
}
