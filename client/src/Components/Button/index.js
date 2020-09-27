import React from 'react';
import styled from 'styled-components';
import render from 'react-dom';
import withScriptsjs from "react-google-maps";
import Map from './Map';
import './style.css';

const StyledButton = styled.button`
  background-color: red;
  color: white;
`

export const Button = props => {
 const MapLoader = withScriptjs(Map);

  return (
    <MapLoader
      googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyB2zq4lAoXmUL-vRSmJH7uRhvOsIsBRLgk&callback=initMap"
      loadingElement={<div style={{ height: `100%` }} />}
    />
  );
};

render(<Button />, document.getElementById('root'));

  //html goes here
   <h1>My Google Map</h1>
    <div id="map"></div>
    <div>
      <StyledButton>
        Click Here
      </StyledButton>
    </div>
  )
}
