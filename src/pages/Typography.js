import React from 'react'

import {Grid, Typography} from '@mui/material'
import Button from '@mui/material/Button'
import Stack from '@mui/material/Stack'
const TypoGraphy = () => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={4}>
        <Typography variant='h1'>Typography</Typography>
        <Typography variant='h2'>Typography</Typography>
        <Typography variant='h3'>Typography</Typography>
        <Typography variant='h4'>Typography</Typography>
        <Typography variant='h5'>Typography</Typography>
        <Typography variant='h6'>Typography</Typography>
        <Typography variant='subtitle1'>Typography</Typography>
        <Typography variant='subtitle2'>Typography</Typography>
        <Typography variant='body1'>Typography</Typography>
        <Typography variant='body2'>Typography</Typography>
        <Typography variant='button'>Button</Typography>
      </Grid>
      <Grid item xs={4}>
        <Stack spacing={2}>
          <Typography variant='h2'>Text Button</Typography>
          <Button variant='text' color='primary'>
            Hello
          </Button>

          <Button variant='text' color='secondary'>
            Hello
          </Button>

          <Button variant='text' color='error'>
            Hello
          </Button>

          <Button variant='text' color='warning'>
            Hello
          </Button>

          <Button variant='text' color='info'>
            Hello
          </Button>
          <Button variant='text' color='success'>
            Hello
          </Button>
        </Stack>
      </Grid>

      <Grid item xs={4}>
        <Stack spacing={2}>
          <Typography variant='h2'>Outlined Button</Typography>
          <Button variant='text'>Hello</Button>
          <Button variant='contained'>Hello</Button>
          <Button variant='outlined'>Hello</Button>
        </Stack>
        <Stack spacing={2}>
          <Typography variant='h2'>Text Button</Typography>
          <Button variant='text'>Hello</Button>
          <Button variant='contained'>Hello</Button>
          <Button variant='outlined'>Hello</Button>
        </Stack>
      </Grid>
      <Grid item xs={4}>
        <Stack spacing={2}>
          <Typography variant='h2'>Text Button</Typography>
          <Button variant='text'>Hello</Button>
          <Button variant='contained'>Hello</Button>
          <Button variant='outlined'>Hello</Button>
        </Stack>
      </Grid>
    </Grid>
  )
}
export default TypoGraphy
