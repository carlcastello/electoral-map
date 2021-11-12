import { ICarousel, IOwnProps } from "./types";

export default (theme: any) => ({
  multiCarousel: {
    // marginTop: `${theme.spacing * 2}px`,
    marginTop: [theme.spacing * 2],
    paddingBottom: (props: any) => {
      return [props.slides && props.slides.length > 0 ? theme.spacing * 2 : 0];
    },
    '& .carousel-item > div': {
      paddingRight: [theme.spacing]
    },
    '& .carousel-dots': {
      bottom: theme.spacing - 5,
      justifyContent: 'flex-start',
      '& button': {
        borderRadius: 0,
        width: '30px',
        height: '8px'
      }

    }
  }
})
