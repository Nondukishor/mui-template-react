import {styled} from '@mui/material/styles'
import MuiAppBar from '@mui/material/AppBar'

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({theme}) => ({
  boxShadow: 'none',
  transition: theme.transitions.create(['margin', 'width'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  // ...(open && {
  //   width: `calc(100% - ${global.config.env.drawerWidth}px)`,
  //   // width: '100%',
  //   marginLeft: `${global.config.env.drawerWidth}px`,
  //   transition: theme.transitions.create(['margin', 'width'], {
  //     easing: theme.transitions.easing.easeOut,
  //     duration: theme.transitions.duration.enteringScreen,
  //   }),
  // }),
}))

export default AppBar
