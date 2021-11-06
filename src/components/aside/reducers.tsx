import { createReducers } from '../../store/utils';
import { FETCH_ASIDE_ACTION } from './action';
import { IMainDrawer } from './component/types';



const initialStore: any = {
  drawerState: false
}

export const asideReducer = createReducers(initialStore, {
  [FETCH_ASIDE_ACTION]: (state: IMainDrawer, payload: IMainDrawer) => {
    return ({
      ...state,
      ...payload
    })
  }
})
