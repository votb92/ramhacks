import React from 'react'
import styled from 'styled-components'
import { Filter } from '../../Filter'
import { CarCard } from '../../CarCard'

const StyledDiv = styled.div`
  margin: 1rem 2rem;
  @media (max-width: 768px) {
    visibility: hidden;
    width: 0;
  }
`

const StyledDivMain = styled.div`
  margin: 1rem 2rem;
  width: 70%;
`

const MiddleDiv = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  margin: 1rem;
  align-self: middle;
`

const ContainerDiv = styled.div`
  display: flex;
  justify-content: center;
`

export const MainScreen = () => {
  return (
    <ContainerDiv>
      <MiddleDiv>
        <StyledDiv>
          <Filter />
        </StyledDiv>
        <StyledDivMain>
          <CarCard />
        </StyledDivMain>
      </MiddleDiv>
    </ContainerDiv>
  )
}
