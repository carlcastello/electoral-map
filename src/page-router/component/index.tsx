import React, { Component, ReactNode } from 'react';

import injectSheet from 'react-jss'

import { BrowserRouter, Route, Switch } from 'react-router-dom';

import MunicipalWard from '../../pages/municipal-ward';
import MainNavigation from '../../components/main-navigation';
import Aside from '../../components/aside';

import styles from './styles';
import { IOwnProps } from './types';

class PageRouter extends Component<IOwnProps>{
  render(): ReactNode {
    const {
      classes: {
        main
      }
    } = this.props;

    return (
      <BrowserRouter>
        <MainNavigation/>
        <div className={main}>
          <Switch>
            <Route exact path="/" component={MunicipalWard} />
          </Switch>
        </div>
        <Aside/>
      </BrowserRouter>
    )
  }
}

export default injectSheet(styles)(PageRouter);