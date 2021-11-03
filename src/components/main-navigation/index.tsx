import React, { Component, ReactNode } from 'react';
import { AppBar, Toolbar, Typography, } from '@mui/material';

import { IOwnProps } from './types';
// import { Box } from '@mui/system';

class MainNavigation extends Component<IOwnProps> {
  
  render(): ReactNode {
    return (
      <AppBar>
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
