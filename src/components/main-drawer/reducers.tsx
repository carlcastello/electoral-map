import { createReducers } from '../../store/utils';
import { FETCH_DRAWER_ACTION } from './action';
import { IMainDrawer } from './component/types';



const initialStore: any = {
  drawerState: false
}

export const mainDrawerReducer = createReducers(initialStore, {
  [FETCH_DRAWER_ACTION]: (state: IMainDrawer, payload: IMainDrawer) => {
    return ({
      ...state,
      ...payload
    })
  }
})
