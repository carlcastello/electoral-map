import { Button } from '@mui/material';
import { Box } from '@mui/system';
import React, { Component, ReactNode } from 'react';

import { IOwnProps } from './types';

class MunicipalWard extends Component<IOwnProps> {

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