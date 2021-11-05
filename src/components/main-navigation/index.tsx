import React, { Component, ReactNode } from 'react';

import injectSheet from 'react-jss'

import styles from './styles';
import { IOwnProps } from './types';

class MainNavigation extends Component<IOwnProps> {
  
  render(): ReactNode {
    const {
      classes: {
        component
      }
    } = this.props;
    return (
      <nav className={component}>
        Logo
      </nav>
     );
  }
}

export default injectSheet(styles)(MainNavigation);
