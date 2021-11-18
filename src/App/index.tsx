import React, { Component, ReactNode } from 'react';

import { ThemeProvider } from '@mui/material';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk'

import MainReducer from '../store/reducer';

import { IOwnProps } from './types';
import AppTheme from './app-theme';

import PageRouter from '../page-router';


class App extends Component<IOwnProps> {

  render(): ReactNode {
    return (
      <Provider store={createStore(MainReducer, applyMiddleware(thunkMiddleware))}>
        <ThemeProvider theme={AppTheme}>
          <PageRouter/>
        </ThemeProvider>
      </Provider>
    )
  } 
}

export default App;