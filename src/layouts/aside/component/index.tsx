import React, { Component, ReactNode } from 'react';
import withStyles from 'react-jss';

import CardCarousel from '../../../components/card-carousel';

import styles from './styles';
import { IOwnProps, IReduxProps } from './types';

class Aside extends Component<IOwnProps & IReduxProps> {

  renderBanner(): ReactNode {
    const {
      asideData: {
        banner: {
          src,
          title
        }
      },
      classes: {
        bannerImage
      }
    } = this.props;
    return (
      <img
        className={bannerImage}
        alt={title}
        src={src} />
    );
  }


  renderDescription(): ReactNode {
    const {
      asideData: {
        description: {
          title,
          intro,
          quickFacts
        }
      },
      classes: {

      }
    } = this.props;
    return (
      <section>
        <h2>
          {title}
        </h2>
        <p>
          {intro}
        </p>
        <dl>
          {quickFacts.map(({title, description}) => {
            return (
              <>
                <dt>
                  {title}
                </dt>
                <dd>
                  {description}
                </dd>
              </>
            )
          })}
        </dl>
      </section>
    )
  }

  renderCarousels(): ReactNode {
    const {
      asideData: {
        features
      }
    } = this.props;
    
    return (
      features.map(({title, intro, slides}) => 
        <CardCarousel
          title={title}
          intro={intro}
          slides={slides}/>
      )
    
    );
  }


  render(): ReactNode {
    const {
      classes: {
        component
      }
    } = this.props;
    
    return (
      <aside className={component}>
        {this.renderBanner()}
        {this.renderDescription()}
        {this.renderCarousels()}
      </aside>
    );
  }
}

export default withStyles(styles)(Aside);
