import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
  background-color: red;
  color: white;
`

export const Button = props => {
  return (
    <div>
      <StyledButton>
        Click Here
      </StyledButton>
    </div>
  )
}