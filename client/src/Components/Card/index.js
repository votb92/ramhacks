import React from 'react'

import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import TextField from '@material-ui/core/TextField'
import { Link } from 'react-router-dom'

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  contentContainer: {
    marginLeft: "5%",
    marginRight: "5%"
  },
  button: {
    background: '#FFD900',
    width: '85%',
    '&:hover': {
      background: '#053361',
      color: 'white',
    },
  },
  title: {
    fontSize: 14,
    opacity: 0.5,
    marginBottom: '1rem',
  },
  buttonContainer: {
    display: 'flex',
    justifyContent: 'center',
  },
  inputs: {
    width: '100%',
  },
  links: {
    display: 'flex',
    justifyContent: 'center',
    boxSizing: "border-box",
    paddingBottom: "1rem"
  }
})

export const ExampleCard = () => {
  const classes = useStyles()
  const bull = <span className={classes.bullet}>•</span>

  return (
    <Card className={classes.root}>
      <CardContent className={classes.contentContainer}>
        <Typography color='#053361' gutterBottom variant='h4'>
          Sign In
        </Typography>
        <br />
        <Typography className={classes.title} component='h2'>
          To deliver this car, sign in to your MyCarMax
        </Typography>
        <TextField
          className={classes.inputs}
          id='standard-basic'
          label='Email'
          type='email'
        />
        <TextField
          className={classes.inputs}
          id='outlined-password-input'
          label='Password'
          type='password'
        />
      </CardContent>
      <CardActions className={classes.buttonContainer}>
        <Button size='large' className={classes.button}>
          Sign In
        </Button>
      </CardActions>
      <Typography className={classes.links} component='h2'>
        <Link path='/'>Forgot Password?</Link>
      </Typography>
      <Typography className={classes.links} component='h2'>
        <Link path='/'>Forgot Password?</Link>
      </Typography>
      
    </Card>
  )
}
