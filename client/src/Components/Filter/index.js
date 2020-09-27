import React, { useState } from 'react'

import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'
import Slider from '@material-ui/core/Slider';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  contentContainer: {
    marginLeft: "5%",
    marginRight: "5%"
  },
  headingStyling: {
    color: '#053361',
  }
})

function valuetext(value) {
  return `${value}`;
}

export const Filter = () => {
  const classes = useStyles()
  const [value, setValue] = React.useState([0, 75]);
  const [year, setYear] = React.useState([0, 75]);
  const [mile, setMile] = React.useState([0, 75]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleYear = (event, newValue) => {
    setYear(newValue);
  };

  const handleMile = (event, newValue) => {
    setMile(newValue);
  };

  return (
    <Card className={classes.root}>
      <CardContent className={classes.contentContainer}>
        <Typography className={classes.headingStyling} gutterBottom variant='h4'>
          Sort By
        </Typography>
        <br />
        <Typography id="range-slider" gutterBottom>
        Price range
      </Typography>
      <Slider
        value={value}
        onChange={handleChange}
        valueLabelDisplay="auto"
        aria-labelledby="range-slider"
        getAriaValueText={valuetext}
      />
      <br />
        <Typography id="range-slider" gutterBottom>
        Year range
      </Typography>
      <Slider
        value={year}
        onChange={handleYear}
        valueLabelDisplay="auto"
        aria-labelledby="range-slider"
        getAriaValueText={valuetext}
      />
      <br />
        <Typography id="range-slider" gutterBottom>
        Mileage range
      </Typography>
      <Slider
        value={mile}
        onChange={handleMile}
        valueLabelDisplay="auto"
        aria-labelledby="range-slider"
        getAriaValueText={valuetext}
      />
      </CardContent>

      <div>

      </div>
      
    </Card>
  )
}
