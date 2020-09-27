import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
  background-color: red;
  color: white;
`

const VehicleMileage = props => {
<svg xmlns="http://www.w3.org/2000/svg" width="107" height="29" viewBox="0 0 107 29">
  <text id="_35K_Miles" data-name="35K Miles" transform="translate(0 24)" fill="#545b63" font-size="24" font-family="Lato-Medium, Lato" font-weight="500"><tspan x="0" y="0">35K Miles</tspan></text>
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
export default VehicleMileage;
