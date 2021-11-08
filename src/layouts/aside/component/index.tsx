import React, { Component, ReactNode } from 'react';

import injectSheet from 'react-jss'

import Assets from '../../../assets';

import styles from './styles';
import { IOwnProps, IReduxProps } from './types';

class Aside extends Component<IOwnProps & IReduxProps> {

  renderBanner(): ReactNode {
    const {
      asideData: {
        banner: {
          imageTitle,
          imageUrl
        }
      },
      classes: {
        bannerImage
      }
    } = this.props;
    return (
      <img
        className={bannerImage}
        alt={imageTitle}
        src={imageUrl} />
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
        <h1>
          {title}
        </h1>
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
    return (
      <section>

      </section>
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

export default injectSheet(styles)(Aside);
