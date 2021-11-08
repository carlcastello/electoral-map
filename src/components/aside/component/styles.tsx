export default (theme: any) => ({
  component: {
    height: '100%',
    width: '30%',

    top: 0,
    right: 0,
    // backgroundColor: '#111',
    borderLeft: '1px solid black',
    overflowX: 'hidden',
    
    position: 'fixed' as 'fixed',
    zIndex: 100,
  },
  bannerImage: {
    width: '100%',
    height: '300px',
    objectFit: 'cover' as 'cover'
  }
})