import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
  background-color: red;
  color: white;
`

const VehicleTotalCost = props => {
<svg xmlns="http://www.w3.org/2000/svg" width="90" height="29" viewBox="0 0 90 29">
  <text id="_18_988" data-name="$18,988" transform="translate(0 24)" fill="#545b63" font-size="24" font-family="Lato-Medium, Lato" font-weight="500"><tspan x="0" y="0">$18,988</tspan></text>
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
export default VehicleTotalCost;
