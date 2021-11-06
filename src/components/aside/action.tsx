export const FETCH_ASIDE_ACTION = 'FETCH_ASIDE_ACTION'

export const handleAsideToggle = (asideState: boolean) => {
  return (dispatch: any, getState: any) => {
    return dispatch({type: FETCH_ASIDE_ACTION, payload: {asideState}});
  }
}