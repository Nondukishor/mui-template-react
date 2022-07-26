import {createTheme} from '@mui/material/styles'
const theme = createTheme({
  palette: {
    mode: 'light',
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
    common: {
      primary: '#038edc',
      primaryLight: 'rgb(3 141 221 / 60%)',
      success: '#51d28c',
      successLight: '#51d28c',
      secondary: '#74788d',
      secondaryLight: 'rgb(116 120 141 / 50%)',
      danger: '#f34e4e',
      dangerLight: '#f34e4e',
      info: '#5fd0f3',
      infoLight: '#5fd0f3',
      dark: '#000000',
      darkLight: '#000000',
      warning: `#f7cc53`,
      warningLight: '#f7cc53',
      light: '#ffffff',
      link: '#038edc',
    },
  },
  overrides: {},
})

export default theme
