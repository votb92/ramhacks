import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
  background-color: red;
  color: white;
`

const VehicleDealership = props => {
<svg id="Vehicle_Location" data-name="Vehicle Location" xmlns="http://www.w3.org/2000/svg" width="142" height="19" viewBox="0 0 142 19">
  <text id="Carmax_West_Broad" data-name="Carmax West Broad" transform="translate(0 16)" fill="#6d747a" font-size="16" font-family="Lato-Semibold, Lato" font-weight="600"><tspan x="0" y="0">Carmax West Broad</tspan></text>
</svg>


  return (
  //html goes here
    <div>
      <StyledButton>
        Click Here
      </StyledButton>
    </div>
  )
}
export default VehicleDealership;
