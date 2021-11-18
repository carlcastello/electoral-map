import React, {Component, ReactNode } from 'react';

import withStyles from 'react-jss';

import styles from './styles';
import { ICard, IOwnProps } from './types';

class Card extends Component<ICard & IOwnProps> {
  
  rederCardHead(): ReactNode {
    const {
      cardHead,
      classes: {
        cardHead: cardHeadClass
      }
    } = this.props;
    return (
      cardHead ? 
        <div className={cardHeadClass}>
          <img src={cardHead.image.src} alt={cardHead.image.title} />
        </div> :
        null
    );
  }

  renderCardBody(): ReactNode {
    const {
      cardBody,
      classes: {
        cardBody: cardBodyClass
      }
    } = this.props;

    return (
      cardBody ?
        <div className={cardBodyClass}>
            {cardBody.title ? <h5> {cardBody.title} </h5> : null}
            {cardBody.subTitle ? <p> {cardBody.subTitle} </p> : null}
        </div> :
        null
        
    )
  }


  render(): ReactNode {
    const {
      classes: {
        card
      }
    } = this.props;
    return (
      <div className={card}>
        {this.rederCardHead()}
        {this.renderCardBody()}
      </div>
    )
  }
}

export default withStyles(styles)(Card);