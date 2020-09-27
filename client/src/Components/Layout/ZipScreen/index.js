import React from 'react';
import styled from 'styled-components';
import { ZipCard } from  '../../ZipCard'

const StyledDiv = styled.div`
  display: flex;
  justify-content: center;
  margin: 5%;
`

export const ZipScreen = props => {



  return (
  //html goes here
    <StyledDiv>
      <ZipCard />
    </StyledDiv>
  )
}
