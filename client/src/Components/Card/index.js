import React, { useEffect, useState } from 'react'

import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import TextField from '@material-ui/core/TextField'
import { Link } from 'react-router-dom'
import { useHistory } from 'react-router-dom'

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  contentContainer: {
    marginLeft: '5%',
    marginRight: '5%',
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
    boxSizing: 'border-box',
    paddingBottom: '1rem',
  },
  headingStyling: {
    color: '#053361',
  },
})

export const AuthCard = () => {
  const classes = useStyles()
  let history = useHistory()
  const [getEmail, setEmail] = useState('')
  const [getPassword, setPassword] = useState('')

  useEffect(() => {
    // fetch('/login', )
  }, [])

  const emailHandler = (e) => {
    setEmail(e.target.value)
  }

  const passwordHandler = (e) => {
    setPassword(e.target.value)
  }

  const submitHandler = () => {
    fetch('/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: JSON.stringify({ userName: getEmail, password: getPassword }),
    })
      .then((res) => res.json())
      .then((data) => history.push('/zip'))
      .catch((e) => {
        console.log(e)
        alert('error ' + e)
      })
  }

  return (
    <Card className={classes.root}>
      <CardContent className={classes.contentContainer}>
        <Typography
          className={classes.headingStyling}
          gutterBottom
          variant='h4'
        >
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
          value={getEmail}
          onChange={emailHandler}
        />
        <TextField
          className={classes.inputs}
          id='outlined-password-input'
          label='Password'
          type='password'
          value={getPassword}
          onChange={passwordHandler}
        />
      </CardContent>
      <CardActions className={classes.buttonContainer}>
        <Button size='large' className={classes.button} onClick={submitHandler}>
          Sign In
        </Button>
      </CardActions>
      <Typography className={classes.links} component='h2'>
        <Link to='/'>Forgot Password?</Link>
      </Typography>
      <Typography className={classes.links} component='h2'>
        <Link to='/'>Forgot Password?</Link>
      </Typography>
    </Card>
  )
}
