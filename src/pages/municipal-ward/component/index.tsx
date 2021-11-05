// import { Button } from '@mui/material';
// import { Box } from '@mui/system';
import React, { Component, ReactNode } from 'react';

import { IOwnProps, IReduxProps } from './types';

class MunicipalWard extends Component<IOwnProps & IReduxProps> {

  render(): ReactNode {
    const {
      handleDrawerToggle 
    } = this.props; 
    
    return (
      <div>
        <br/>
        <br/>
        <br/>
        <br/>
        <button  onClick={() => handleDrawerToggle(true)}>
          Button
        </button>
      </div>
    )
  } 
}

export default MunicipalWard;