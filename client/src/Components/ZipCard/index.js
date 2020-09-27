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
    marginLeft: '5%',
    marginRight: '5%',
  },
  button: {
    background: '#FFD900',
    width: '60%',
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
    marginTop: '1rem',
    marginBottom: '3rem',
  },
  inputs: {
    width: '65%',
  },
  inputContainer: {
    display: 'flex',
    justifyContent: 'center',
  },
})

const svgZip = (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width='186.184'
    height='166.699'
    viewBox='0 0 186.184 166.699'
  >
    <defs>
      <linearGradient
        id='linear-gradient'
        x1='0.5'
        y1='1'
        x2='0.5'
        gradientUnits='objectBoundingBox'
      >
        <stop offset='0' stop-color='gray' stop-opacity='0.251' />
        <stop offset='0.535' stop-color='gray' stop-opacity='0.122' />
        <stop offset='1' stop-color='gray' stop-opacity='0.102' />
      </linearGradient>
      <linearGradient
        id='linear-gradient-4'
        x1='0.5'
        y1='1'
        x2='0.5'
        gradientUnits='objectBoundingBox'
      >
        <stop offset='0' stop-color='#b3b3b3' stop-opacity='0.251' />
        <stop offset='0.535' stop-color='#b3b3b3' stop-opacity='0.102' />
        <stop offset='1' stop-color='#b3b3b3' stop-opacity='0.051' />
      </linearGradient>
      <linearGradient
        id='linear-gradient-5'
        x1='0.5'
        y1='1'
        x2='0.5'
        gradientUnits='objectBoundingBox'
      >
        <stop offset='0' stop-opacity='0.122' />
        <stop offset='0.551' stop-opacity='0.09' />
        <stop offset='1' stop-opacity='0.02' />
      </linearGradient>
      <linearGradient
        id='linear-gradient-6'
        x1='0.5'
        y1='1'
        x2='0.5'
        gradientUnits='objectBoundingBox'
      >
        <stop offset='0.005' stop-opacity='0.122' />
        <stop offset='0.551' stop-opacity='0.09' />
        <stop offset='1' stop-opacity='0.051' />
      </linearGradient>
    </defs>
    <g id='Group_339' data-name='Group 339' transform='translate(0 0)'>
      <path
        id='Path_406'
        data-name='Path 406'
        d='M62.47,212.7,0,218.565V71.5l62.47-5.869Z'
        transform='translate(0 -51.867)'
        fill='url(#linear-gradient)'
      />
      <path
        id='Path_407'
        data-name='Path 407'
        d='M297.81,212.7l62.47,5.869V71.5l-62.47-5.869Z'
        transform='translate(-235.34 -51.867)'
        fill='url(#linear-gradient)'
      />
      <path
        id='Path_408'
        data-name='Path 408'
        d='M656.866,212.7l-61.245,5.869V71.5l61.245-5.869Z'
        transform='translate(-470.682 -51.867)'
        fill='url(#linear-gradient)'
      />
      <path
        id='Path_409'
        data-name='Path 409'
        d='M70.189,214.932l-60.7,5.639V79.268l60.7-5.639Z'
        transform='translate(-7.498 -58.185)'
        fill='#f5f5f5'
      />
      <path
        id='Path_410'
        data-name='Path 410'
        d='M298.865,214.932l60.7,5.639V79.268l-60.7-5.639Z'
        transform='translate(-236.174 -58.185)'
        fill='#fff'
      />
      <path
        id='Path_411'
        data-name='Path 411'
        d='M648.942,214.932l-60.7,5.639V79.268l60.7-5.639Z'
        transform='translate(-464.85 -58.185)'
        fill='#f5f5f5'
      />
      <path
        id='Path_412'
        data-name='Path 412'
        d='M125.171,135.494l-46.106,1.618V158.34h39.14v-7.676l6.966-.244,10.614,3.276V138.77Z'
        transform='translate(-62.48 -107.073)'
        fill='#6d747a'
        opacity='0.3'
      />
      <path
        id='Path_413'
        data-name='Path 413'
        d='M103.928,630.176l-51.745,4.976V616.245l51.745-4.976Z'
        transform='translate(-41.237 -483.048)'
        fill='#6d747a'
        opacity='0.3'
      />
      <path
        id='Path_414'
        data-name='Path 414'
        d='M76.928,351.176l-51.745,4.976V337.245l51.745-4.976Z'
        transform='translate(-18.901 -264.572)'
        fill='#6d747a'
        opacity='0.3'
      />
      <rect
        id='Rectangle_1500'
        data-name='Rectangle 1500'
        width='22.555'
        height='17.248'
        transform='translate(93.207 132.533)'
        fill='#888'
        opacity='0.3'
      />
      <rect
        id='Rectangle_1501'
        data-name='Rectangle 1501'
        width='22.555'
        height='17.248'
        transform='translate(85.865 92.049)'
        fill='#6d747a'
        opacity='0.3'
      />
      <rect
        id='Rectangle_1502'
        data-name='Rectangle 1502'
        width='22.555'
        height='17.248'
        transform='translate(95.095 38.14)'
        fill='#6d747a'
        opacity='0.3'
      />
      <path
        id='Path_415'
        data-name='Path 415'
        d='M704.048,589.88l-35.16,2.985V569.978l35.16-2.985Z'
        transform='translate(-528.58 -448.059)'
        fill='#888'
        opacity='0.3'
      />
      <path
        id='Path_416'
        data-name='Path 416'
        d='M684.048,205.88l-35.16,2.985V185.978l35.16-2.985Z'
        transform='translate(-512.775 -144.608)'
        fill='#6d747a'
        opacity='0.3'
      />
      <path
        id='Path_417'
        data-name='Path 417'
        d='M850.206,86.064c0,8.206-14.344,31.443-14.344,31.443S821.518,94.27,821.518,86.064a14.353,14.353,0,1,1,28.688,0Z'
        transform='translate(-681.96 -67.314)'
        fill='url(#linear-gradient-4)'
      />
      <ellipse
        id='Ellipse_52'
        data-name='Ellipse 52'
        cx='4.337'
        cy='4.492'
        rx='4.337'
        ry='4.492'
        transform='translate(149.566 13.221)'
        fill='url(#linear-gradient-5)'
      />
      <path
        id='Path_418'
        data-name='Path 418'
        d='M853.169,92.161c0,7.331-13.273,28.09-13.273,28.09s-13.273-20.759-13.273-28.09a13.273,13.273,0,0,1,26.547,0Z'
        transform='translate(-685.994 -73.384)'
        fill='#1773cf'
      />
      <circle
        id='Ellipse_53'
        data-name='Ellipse 53'
        cx='4.013'
        cy='4.013'
        r='4.013'
        transform='translate(149.889 13.838)'
        fill='#fff'
      />
      <path
        id='Path_419'
        data-name='Path 419'
        d='M270.275,528.953c0,8.264-14.77,31.666-14.77,31.666s-14.77-23.4-14.77-31.666a14.771,14.771,0,1,1,29.539,0Z'
        transform='translate(-223.004 -417.218)'
        fill='#004487'
      />
      <ellipse
        id='Ellipse_54'
        data-name='Ellipse 54'
        cx='4.465'
        cy='4.524'
        rx='4.465'
        ry='4.524'
        transform='translate(28.036 106.167)'
        fill='url(#linear-gradient-6)'
      />
      <path
        id='Path_420'
        data-name='Path 420'
        d='M274.415,534.923c0,7.331-13.273,28.09-13.273,28.09s-13.273-20.759-13.273-28.09a13.384,13.384,0,0,1,7.293-11.853,12.917,12.917,0,0,1,5.98-1.42,13.641,13.641,0,0,1,4.934.947A13.176,13.176,0,0,1,274.415,534.923Z'
        transform='translate(-228.641 -423.271)'
        fill='#004487'
      />
      <circle
        id='Ellipse_55'
        data-name='Ellipse 55'
        cx='4.013'
        cy='4.013'
        r='4.013'
        transform='translate(28.488 106.713)'
        fill='#fff'
      />
      <path
        id='Path_421'
        data-name='Path 421'
        d='M617.415,539.923c0,7.331-13.273,28.09-13.273,28.09s-13.273-20.759-13.273-28.09a13.273,13.273,0,0,1,26.546,0Z'
        transform='translate(-499.692 -427.223)'
        fill='#ffd900'
      />
      <circle
        id='Ellipse_56'
        data-name='Ellipse 56'
        cx='4.013'
        cy='4.013'
        r='4.013'
        transform='translate(100.437 107.762)'
        fill='#fff'
      />
      <path
        id='Path_422'
        data-name='Path 422'
        d='M865.415,499.923c0,7.331-13.273,28.09-13.273,28.09s-13.273-20.759-13.273-28.09a13.273,13.273,0,0,1,26.547,0Z'
        transform='translate(-695.671 -395.613)'
        fill='#053361'
      />
      <circle
        id='Ellipse_57'
        data-name='Ellipse 57'
        cx='4.013'
        cy='4.013'
        r='4.013'
        transform='translate(152.458 99.371)'
        fill='#fff'
      />
      <path
        id='Path_423'
        data-name='Path 423'
        d='M306.415,65.923c0,7.331-13.273,28.09-13.273,28.09s-13.273-20.759-13.273-28.09a13.273,13.273,0,1,1,26.546,0Z'
        transform='translate(-253.929 -52.65)'
        fill='#9ccef7'
      />
      <circle
        id='Ellipse_58'
        data-name='Ellipse 58'
        cx='4.013'
        cy='4.013'
        r='4.013'
        transform='translate(35.201 8.334)'
        fill='#fff'
      />
    </g>
  </svg>
)

export const ZipCard = () => {
  const classes = useStyles()
  const bull = <span className={classes.bullet}>•</span>

  return (
    <Card className={classes.root}>
      <CardContent className={classes.contentContainer}>
        <div className={classes.buttonContainer}>{svgZip}</div>
        <Typography color='#053361' gutterBottom variant='h4' align='center'>
          We want you to get a great price on a car you love.
        </Typography>
        <br />
        <Typography className={classes.title} component='h2' align='center'>
          Since you are transferring a vehicle, there may be fees[1]. Don't
          worry, we'll help you choose the best option. Enter your zip code
          below.
        </Typography>
        <div className={classes.inputContainer}>
          <TextField
            className={classes.inputs}
            id='standard-basic'
            label='Enter your Zip Code'
          />
        </div>
      </CardContent>
      <CardActions className={classes.buttonContainer}>
        <Button size='large' className={classes.button}>
          Sign In
        </Button>
      </CardActions>
    </Card>
  )
}
