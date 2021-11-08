import { createReducers } from '../../store/utils';
import { FETCH_ASIDE_ACTION } from './action';
import { ICity } from './component/types';



const initialStore: any = {
  banner: {
    imageTitle: 'placehoder.jpg',
    imageUrl: 'https://i.redd.it/xs5huy10hfk61.jpg'
  },
  description: {
    title: 'Edmonton',
    intro: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin viverra nisi in nunc imperdiet dignissim. Maecenas sit amet mollis lacus, sit amet faucibus nisi. Nulla quam ipsum, malesuada sit amet tempus quis, sagittis pretium turpis. Aenean faucibus sollicitudin risus, eu fringilla nibh rhoncus vel. Nunc viverra at nisl dictum mattis.',
    quickFacts: [
      {title: 'Donec tincidunt', description: 'Odio efficitur congue iaculis'},
      {title: 'Quisque posuere', description: 'Proin et urna eget leo iaculis'},
      {title: 'Etiam lobortis', description: 'Nunc molestie interdum elit, eget luctus massa'},
      {title: 'Aliquam eu neque egestas', description: 'Vehicula enim iaculis, porta neque'}
    ],
    carousels: [
      {
        title: '',
        list: [
          {
            image: {
              title: '',
              url: ''
            }
          }
        ]
      }
    ]
  }
}

export const asideReducer = createReducers(initialStore, {
  [FETCH_ASIDE_ACTION]: (state: ICity, payload: ICity) => {
    return ({
      ...state,
      ...payload
    })
  }
})
