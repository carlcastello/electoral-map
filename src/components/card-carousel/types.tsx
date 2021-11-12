import { ICard } from '../card/types';

export interface ICarousel {
  title: string,
  intro: string,
  slides: ICard[]
}

export interface IOwnProps {
  classes: {
    multiCarousel: string
  }
}
