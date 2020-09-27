import React, {useState, useEffect} from 'react'
import styled from 'styled-components'
import { AuthCard } from '../../Card'

const LayoutDivLeft = styled.div`
  height: 100%;
  width: 50vw;
  border-width: 2px;
  border-color: red;
`
const LayoutDivRight = styled.div`
  height: 100vh;
  width: 50vw;
  border-width: 2px;
  border-color: red;
  background-color: green;
`
const ParentDiv = styled.div`
  display: flex;
`

const CardContainer = styled.div`
  width: 65%;
  margin: 30% auto;
`

export const AuthScreen = (props) => {

  return (
    <ParentDiv>
      <LayoutDivLeft>
        <CardContainer>
          <AuthCard />
        </CardContainer>
      </LayoutDivLeft>
      <LayoutDivRight></LayoutDivRight>
    </ParentDiv>
  )
}
