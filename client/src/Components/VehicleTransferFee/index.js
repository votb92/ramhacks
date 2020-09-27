import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
  background-color: red;
  color: white;
`

const VehicleTransferFee = props => {
<svg xmlns="http://www.w3.org/2000/svg" width="204" height="29" viewBox="0 0 204 29">
  <text id="Transfer_Fee_:_999" data-name="Transfer Fee : $999" transform="translate(0 24)" fill="#6a6a6a" font-size="24" font-family="Lato-Medium, Lato" font-weight="500"><tspan x="0" y="0">Transfer Fee : $999</tspan></text>
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
export default VehicleTransferFee;
