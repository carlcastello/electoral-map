import React, { Component, ReactNode } from 'react';

import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { ThemeProvider } from '@mui/material';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk'

import MunicipalWard from '../pages/municipal-ward';
import MainNavigation from '../components/main-navigation';
import MainDrawer from '../components/main-drawer';

import MainReducer from '../store/reducer';

import { IOwnProps } from './types';
import AppTheme from './app-theme';


class App extends Component<IOwnProps> {

  render(): ReactNode {
    return (
      <Provider store={createStore(MainReducer, applyMiddleware(thunkMiddleware))}>
        <ThemeProvider theme={AppTheme}>
          <BrowserRouter>
            <MainNavigation/>
            <Switch>
              <Route exact path="/" component={MunicipalWard} />
            </Switch>
            <MainDrawer/>
          </BrowserRouter>
        </ThemeProvider>
      </Provider>
    )
  } 
}

export default App;