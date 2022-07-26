import styled from '@emotion/styled'

const CircleImg = styled('img')(({theme}) => ({
  height: theme.spacing(5),
  width: theme.spacing(5),
  borderRadius: '50%',
  marginRight: theme.spacing(2),
}))

export default CircleImg
