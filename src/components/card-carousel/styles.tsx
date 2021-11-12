export default (theme: any) => ({
  multiCarousel: {
    marginTop: `${theme.spacing * 2}px`,
    '& .carousel-item > div': {
      paddingRight: `${theme.spacing}px`
    }
  }
})
