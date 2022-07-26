import {useContext} from 'react'
import {IconButton, Toolbar} from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import Typography from '@mui/material/Typography'
import {Outlet} from 'react-router-dom'
import AppBar from '../Component/AppBar'
import {LayoutContext} from '../Context/LayoutContext'
import styled from '@emotion/styled'

const Offset = styled('div')(({theme}) => theme.mixins.toolbar)

const MainLayout = () => {
  const {menuOpen, setMenuOpen} = useContext(LayoutContext)
  const handleOpen = () => setMenuOpen(!menuOpen)
  return (
    <>
      <AppBar position='fixed' open={menuOpen}>
        <Toolbar variant='dense'>
          <IconButton
            color='inherit'
            aria-label='open drawer'
            onClick={handleOpen}
            edge='start'
            sx={{mr: 2}}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant='h6' noWrap component='div'>
            Persistent drawer
          </Typography>
        </Toolbar>
      </AppBar>
      <Offset />
      <main style={{background: 'red'}}>
        <Outlet />
      </main>
    </>
  )
}
export default MainLayout
