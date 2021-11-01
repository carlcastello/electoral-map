import React, { Component, ReactNode } from 'react';

import { IOwnProps } from './types';

class SidePanel extends Component<IOwnProps> {
  render(): ReactNode {
    return (
      <div>
        Main Navigation
      </div>
    );
  }
}

export default SidePanel;
