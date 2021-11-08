export default (theme: any) => ({
  '@global': {
    body: {
      margin: 0,
      fontSize: theme.typography.fontSize,
      fontFamily: theme.typography.fontFamily
    },
    h1: {
      fontFamily: theme.typography.headingFontFamily,
      fontWeight: 600,
      fontSize: '2.50rem',
      margin: '1.5rem 0',
      
    },
    h2: {
      fontFamily: theme.typography.headingFontFamily,
      fontWeight: 600,
      fontSize: '2.25rem',
      lineHeight: 1.3,
    },
    h3: {
      fontFamily: theme.typography.headingFontFamily,
      fontWeight: 600,
      fontSize: '2.00rem',
      lineHeight: 1.3,
    },
    h4: {
      fontFamily: theme.typography.headingFontFamily,
      fontWeight: 600,
      fontSize: '1.75rem'
    },
    h5: {
      fontFamily: theme.typography.headingFontFamily,
      fontWeight: 600,
      fontSize: '1.5rem'
    },
    h6: {
      fontFamily: theme.typography.headingFontFamily,
      fontWeight: 200,
      fontSize: '1.25rem'
    },
    section: {
      ['aside &']: {
        paddingLeft: `${theme.spacing * 2}px`,
        paddingRight: `${theme.spacing * 2}px`
      }
    }
  },

  main: {
    
  }
});