import React, { Component, ReactNode } from 'react';

import injectSheet from 'react-jss'

import styles from './styles';
import { IOwnProps, IReduxProps } from './types';

class MainDrawer extends Component<IOwnProps & IReduxProps> {
  render(): ReactNode {
    const {
      mainDrawerData: {
        drawerState
      }
    } = this.props;
    
    return (
      <div>
        <h1>
        Hello World
        </h1>
      </div>
    );
  }
}

export default injectSheet(styles)(MainDrawer);
