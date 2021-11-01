import React, { Component, ReactNode } from 'react';

import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { ThemeProvider } from '@mui/material';

import MunicipalWard from '../pages/municipal-ward';
import MainNavigation from '../components/main-navigation';
import SidePanel from '../components/side-panel';

import { IOwnProps } from './types';
import AppTheme from './app-theme';

class App extends Component<IOwnProps> {

  render(): ReactNode {
    return (
      <ThemeProvider theme={AppTheme}>
        <BrowserRouter>
          <MainNavigation/>
          <Switch>
            <Route exact path="/" component={MunicipalWard} />
          </Switch>
          <SidePanel/>
        </BrowserRouter>
      </ThemeProvider>
    )
  } 
}

export default App;