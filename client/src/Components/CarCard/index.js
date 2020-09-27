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
  horizLine: {
    width: '100%',
    height: '5px',
    backgroundColor: "gray"
  },
  links: {
    display: 'flex',
    justifyContent: 'left',
    boxSizing: "border-box",
    paddingBottom: "1rem",
    paddingLeft: '2.5rem',
    fontSize: 8
  }
})

export const CarCard = () => {
  const classes = useStyles()
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <>
    <Card className={classes.root}>
      <CardContent className={classes.contentContainer}>
        <Typography color='#053361' gutterBottom variant='h4'>
          2020 Hyundai<br />
          Santa Fe
        </Typography>
        <br />
        <Typography className={classes.title} component='h2'>
          $18,988 {bull} 35K Miles
        </Typography>
        <Typography className={classes.title} component='h2'>
          $257/month
        </Typography>

        <br />
        <div className={classes.horizLine} ></div>
        
      </CardContent>

      <Typography className={classes.links} component='h2'>
        Carmax West Broad
      </Typography>
      <Typography className={classes.links} component='h2'>
        In Stock
      </Typography>
      
    </Card>
    <image src='./santafe.png' alt="logo" height="300px" width="300px" />
    </>
  )
}
