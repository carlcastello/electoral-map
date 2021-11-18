import { IImage } from '../../common/types';

export interface ICard {
  cardHead?: {
    image: IImage,
  },
  cardBody: {
    title?: string,
    subTitle?: string,
  }
}

export interface IOwnProps {
  classes: {
    card: string,
    cardHead: string,
    cardBody: string
  }
}