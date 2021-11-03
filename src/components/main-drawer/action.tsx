export const FETCH_DRAWER_ACTION = 'FETCH_DRAWER_ACTION'

export const handleDrawerToggle = (drawerState: boolean) => {
  return (dispatch: any, getState: any) => {
    return dispatch({type: FETCH_DRAWER_ACTION, payload: {drawerState}});
  }
}