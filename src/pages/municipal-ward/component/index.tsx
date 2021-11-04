import { Button } from '@mui/material';
import { Box } from '@mui/system';
import React, { Component, ReactNode } from 'react';

import { IOwnProps, IReduxProps } from './types';

class MunicipalWard extends Component<IOwnProps & IReduxProps> {

  render(): ReactNode {
    const {
      handleDrawerToggle 
    } = this.props; 
    
    return (
      <Box>
        <br/>
        <br/>
        <br/>
        <br/>
        <Button variant="contained" onClick={() => handleDrawerToggle(true)}>
          Hello World
        </Button>
      </Box>
    )
  } 
}

export default MunicipalWard;