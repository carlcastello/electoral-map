// export interface IMainDrawer {
//   drawerState: boolean
// }

export interface IBanner {
  imageTitle: string,
  imageUrl: string
}

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
  banner: IBanner,
  description: IDescription
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
