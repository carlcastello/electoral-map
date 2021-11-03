import { createReducers } from '../../store/utils';
import { FETCH_DRAWER_ACTION } from './action';
import { IMainDrawer } from './types';

export const mainDrawerReducer = createReducers({}, {
  [FETCH_DRAWER_ACTION]: (state: IMainDrawer, payload: IMainDrawer) => {
    return ({
      ...state,
      ...payload
    })
  }
})
