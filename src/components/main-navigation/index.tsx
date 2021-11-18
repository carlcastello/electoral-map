import React, { Component, ReactNode } from 'react';
import { AppBar, Toolbar, Typography, } from '@mui/material';

import { IOwnProps } from './types';

class MainNavigation extends Component<IOwnProps> {
  
  render(): ReactNode {
    return (
      <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
        <Toolbar>
          <Typography>
            Edmonton Municipal Elections
          </Typography>
        </Toolbar>
      </AppBar>
    );
  }
}

export default MainNavigation;
