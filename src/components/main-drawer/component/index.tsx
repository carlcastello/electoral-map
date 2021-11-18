import { Drawer, Toolbar } from '@mui/material';
import React, { Component, ReactNode } from 'react';

import { IOwnProps, IReduxProps } from './types';

class MainDrawer extends Component<IOwnProps & IReduxProps> {
  render(): ReactNode {
    const drawerWidth = '30vw';
    const {
      mainDrawerData: {
        drawerState
      }
    } = this.props;
    
    return (
      <Drawer
        anchor="right"
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box' },
        }}>
          Potato Salad
      </Drawer>
    );
  }
}

export default MainDrawer;
