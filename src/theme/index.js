import {createTheme} from '@mui/material/styles'
const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#2196f3',
      primary: '#0690ff',
      light: '#5dabea',
      dark: '#07518d',
      contrastText: '#fff',
    },
    secondary: {
      main: '#673ab7',
      primary: '#7735f0',
      light: '#a179e9',
      dark: '#31067f',
      contrastText: '#fff',
    },
    success: {
      main: '#46e98a',
      primary: '#27b361',
      light: '#62f39e',
      dark: '#067e38',
      contrastText: '#fff',
    },
    warning: {
      main: '#ffc107',
      primary: '#edb50d',
      dark: '#b88b04',
      contrastText: '#fff',
    },
    error: {
      main: '#c9180b',
      primary: '#f71a09',
      light: '#f03d31',
      dark: '#900f06',
      contrastText: '#fff',
    },
    info: {
      main: '#45c5de',
      primary: '#11a3c0',
      light: '#68cfe3',
      dark: '#086476',
    },
    background: {
      paper: '#ffffff',
      default: '#ffffff',
    },
    text: {
      primary: '#000',
      secondary: '#000',
      disabled: 'rgba(0, 0, 0, 0.38)',
    },
  },
  overrides: {},
})

export default theme
