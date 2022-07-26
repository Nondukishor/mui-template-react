import styled from '@emotion/styled'
import {IconButton} from '@mui/material'
import {hex2rgba} from '../util/css-util'

const SIconButton = styled(IconButton)((props) => {
  return {
    background: hex2rgba(props.theme.palette.secondary.main, 0.2),
    color: props.theme.palette.secondary.main,
    padding: '0.1rem',
    borderRadius: '6px',

    '&:hover': {
      color: props.theme.palette.secondary.contrastText,
      background: props.theme.palette.secondary.main,
      borderRadius: '6px',
    },
  }
})

export default SIconButton
