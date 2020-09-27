import React, { useEffect, useState } from 'react'

import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
// import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'
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
  dataPrice: {
    fontSize: 14,
    opacity: 0.5,
    marginBottom: '1rem',
    display: 'flex',
    justifyContent: 'space-between'
  },
  buttonContainer: {
    display: 'flex',
    justifyContent: 'center',
  },
  horizLine: {
    width: '100%',
    height: '5px',
    backgroundColor: 'gray',
  },
  links: {
    display: 'flex',
    justifyContent: 'left',
    boxSizing: 'border-box',
    paddingBottom: '1rem',
    paddingLeft: '2.5rem',
    fontSize: 8,
  },
  headingStyling: {
    color: '#053361',
  },
})

export const CarCard = (props) => {
  const history = useHistory()
  const classes = useStyles()
  const bull = <span className={classes.bullet}>•</span>
  const [getStoreData, setStoreData] = useState([])
  const [getStoreId, setStoreId] = useState([])
  const [getPrice, setPrice] = useState([])

  useEffect(() => {
    setStoreData(history.location.state.storeData)
    setStoreId(Object.keys(history.location.state.storeData[0]))
    setPrice(Object.values(history.location.state.storeData[0]))
  }, [])

  return (
    <>
      <Card className={classes.root}>
        <div>
          <image src='./santafe.png' alt='logo' height='300px' width='300px' />
        </div>

        <CardContent className={classes.contentContainer}>
          <Typography
            className={classes.headingStyling}
            gutterBottom
            variant='h4'
          >
            2020 Hyundai
            <br />
            Santa Fe
          </Typography>
          <br />
          <Typography className={classes.dataPrice} component='h2'>
            <span>$18,988 {bull} 35K Miles</span>
            <span>
              Transfer fee: {getPrice[0] == 0 ? 'FREE' : `${getPrice[0]}`}
            </span>
          </Typography>
          <Typography className={classes.title} component='h2'>
            $257/month
          </Typography>

          <br />
          <div className={classes.horizLine}></div>
        </CardContent>

        <Typography className={classes.links} component='h2'>
          Carmax West Broad
        </Typography>
        <Typography className={classes.links} component='h2'>
          In Stock
        </Typography>
      </Card>
    </>
  )
}
