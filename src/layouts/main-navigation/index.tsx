import React, { Component, ReactNode } from 'react';

import withStyles from 'react-jss'

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

export default withStyles(styles)(MainNavigation);
