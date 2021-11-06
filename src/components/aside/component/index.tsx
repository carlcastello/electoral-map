import React, { Component, ReactNode } from 'react';

import injectSheet from 'react-jss'

import styles from './styles';
import { IOwnProps, IReduxProps } from './types';

class Aside extends Component<IOwnProps & IReduxProps> {
  render(): ReactNode {
    const {
      mainDrawerData: {
        drawerState
      }
    } = this.props;
    
    return (
      <aside>
        <div>
          <h1>
            Hello World
          </h1>
        </div>
      </aside>
    );
  }
}

export default injectSheet(styles)(Aside);
