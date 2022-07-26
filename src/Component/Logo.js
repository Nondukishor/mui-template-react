import CircleImg from './CircleImg'
const Logo = ({caption, logo}) => {
  return (
    <figure
      style={{
        display: 'flex',
        alignItems: 'center',
        margin: '0 16px 0 0',
      }}
    >
      <CircleImg src={logo} alt='logo' />
      <figcaption>{caption}</figcaption>
    </figure>
  )
}
export default Logo
