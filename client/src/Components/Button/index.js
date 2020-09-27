import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
  background-color: red;
  color: white;
`

export const Button = props => {
//javascript goes here
  return (
  //html goes here
    <div>
      <StyledButton>
        Click Here
      </StyledButton>
    </div>
  )
}
