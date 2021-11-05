import React, { Component, ReactNode } from 'react';

// import { Drawer } from '@mui/material';
// import { withStyles } from '@mui/styles';
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
        Hello World
      </div>
    );
  }
}

export default injectSheet(styles)(MainDrawer);
