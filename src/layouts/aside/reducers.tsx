import { createReducers } from '../../store/utils';
import { FETCH_ASIDE_ACTION } from './action';
import { ICity } from './component/types';



const initialStore: any = {
  banner: {
    title: 'placehoder.jpg',
    src: 'https://i.redd.it/xs5huy10hfk61.jpg'
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
  },
  features: [
    {
      title: 'Feature 1',
      intro: 'Morbi id lectus in est feugiat tristique. Nullam pretium orci eu malesuada consequat.',
      slides: [
        {
          cardHead: {
            image: {
              src: 'https://i.redd.it/xs5huy10hfk61.jpg',
              title: 'akdjadja'
            }
          },
          cardBody: {
            title: 'Aenean at risus vehicula',
            subTitle: 'Duis rhoncus augue risus. Cras in dolor sodales, placerat lorem vel, rutrum mi.'
          }
        }
      ]
    },
    {
      title: 'Feature 2',
      intro: 'Morbi id lectus in est feugiat tristique. Nullam pretium orci eu malesuada consequat.',
      slides: [
        {
          cardHead: {
            image: {
              src: 'https://i.redd.it/xs5huy10hfk61.jpg',
              title: 'akdjadja'
            }  
          },
          cardBody: {
            title: 'Aenean at risus vehicula',
            subTitle: 'Duis rhoncus augue risus. Cras in dolor sodales, placerat lorem vel, rutrum mi.'
          }
        },
        {
          cardHead: {
            image: {
              src: 'https://i.redd.it/xs5huy10hfk61.jpg',
              title: 'akdjadja'
            }  
          },
          cardBody: {
            title: 'Aenean at risus vehicula',
            subTitle: 'Duis rhoncus augue risus. Cras in dolor sodales, placerat lorem vel, rutrum mi.'
          }
        },
        {
          cardHead: {
            image: {
              src: 'https://i.redd.it/xs5huy10hfk61.jpg',
              title: 'akdjadja'
            }  
          },
          cardBody: {
            title: 'Aenean at risus vehicula',
            subTitle: 'Duis rhoncus augue risus. Cras in dolor sodales, placerat lorem vel, rutrum mi.'
          }
        }
      ]
    },
  ]
}

export const asideReducer = createReducers(initialStore, {
  [FETCH_ASIDE_ACTION]: (state: ICity, payload: ICity) => {
    return ({
      ...state,
      ...payload
    })
  }
})
