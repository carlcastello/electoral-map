// import { Button } from '@mui/material';
// import { Box } from '@mui/system';
import React, { Component, ReactNode } from 'react';

import { IOwnProps, IReduxProps } from './types';

class MunicipalWard extends Component<IOwnProps & IReduxProps> {

  render(): ReactNode {
    return (
      <div>
        <br/>
        <br/>
        <br/>
        <h1>Hello World</h1>
        <h2>Hello World</h2>
        <h3>Hello World</h3>
        <h4>Hello World</h4>
        <h5>Hello World</h5>
      </div>
    )
  } 
}

export default MunicipalWard;