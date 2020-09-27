import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
  background-color: red;
  color: white;
`

const VehicleMake = props => {
<svg xmlns="http://www.w3.org/2000/svg" width="164" height="60" viewBox="0 0 164 60">
  <text id="Title" transform="translate(0 25)" fill="#053361" font-size="25" font-family="Lato-Bold, Lato" font-weight="700"><tspan x="0" y="0">2020 Hyundai </tspan><tspan x="0" y="30">Santa Fe</tspan></text>
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
export default VehicleMake;
