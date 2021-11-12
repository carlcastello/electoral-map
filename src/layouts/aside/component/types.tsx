import { IImage } from '../../../common/types';
import { ICarousel } from '../../../components/card-carousel/types';


export interface IQuickFact {
  title: string,
  description: string
}

export interface IDescription {
  title: string,
  intro: string,
  quickFacts: IQuickFact[]
}

export interface ICity {
  banner: IImage,
  description: IDescription,
  features: ICarousel[]
}

export interface IOwnProps {
  classes: {
    component: string,
    bannerImage: string
  }
}

export interface IReduxProps {
  asideData: ICity,
}
