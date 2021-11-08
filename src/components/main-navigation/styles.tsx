export default (theme: any) => ({
  component: {
    backgroundColor: theme.colors.blue,
    padding: `${theme.spacing * 1.5}px ${theme.spacing * 2}px`,
    position: 'relative' as 'relative',
    zIndex: 200
  }
})