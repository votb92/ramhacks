import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
  background-color: red;
  color: white;
`

export const Footer = props => {
  return (
    <div>
      <StyledButton>
        Click Here
      </StyledButton>
    </div>
  )
}