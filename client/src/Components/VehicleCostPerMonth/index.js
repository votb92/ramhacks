import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
  background-color: red;
  color: white;
`

const VehicleCostPerMonth = props => {
<svg xmlns="http://www.w3.org/2000/svg" width="93" height="19" viewBox="0 0 93 19">
  <text id="_257_Month" data-name="$257/Month" transform="translate(0 16)" fill="#6d747a" font-size="16" font-family="Lato-Semibold, Lato" font-weight="600"><tspan x="0" y="0">$257/Month</tspan></text>
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
export default VehicleCostPerMonth;

