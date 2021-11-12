import React, { Component, ReactNode } from 'react';

import withStyles from 'react-jss'


import MultiCarousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

import Card from '../card';

import styles from './styles';
import { ICarousel, IOwnProps } from './types';
import { threeCardsResponsiveness } from './constant';


class CardCarousel extends Component<ICarousel & IOwnProps> {
  render(): ReactNode {
    const {
      title,
      intro,
      slides,
      classes: {
        multiCarousel
      }
    } = this.props;
  
    return (
      <section>
        {title ? <h2>{title}</h2> : null}
        {intro ? <p>{intro}</p> : null}
        <MultiCarousel
          className={multiCarousel}
          responsive={threeCardsResponsiveness}
          partialVisible={true}
          itemClass="carousel-item" >
          {slides.map(props => <Card {...props} />)}            
        </MultiCarousel>
      </section>
    )
  }
}

export default withStyles(styles)(CardCarousel);