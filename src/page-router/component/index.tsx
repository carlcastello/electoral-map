import React, { Component, ReactNode } from 'react';

import { BrowserRouter, Route, Switch } from 'react-router-dom';

import MunicipalWard from '../../pages/municipal-ward';
import MainNavigation from '../../components/main-navigation';
import MainDrawer from '../../components/main-drawer';

import { IOwnProps } from './types';

class PageRouter extends Component<IOwnProps>{
  render(): ReactNode {
    return (
      <BrowserRouter>
        <MainNavigation/>
        <Switch>
          <Route exact path="/" component={MunicipalWard} />
        </Switch>
        <MainDrawer/>
      </BrowserRouter>
    )
  }
}

export default PageRouter;