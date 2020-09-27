import React from 'react';
import styled from 'styled-components';
import { ExampleCard } from '../../Card'

const LayoutDivLeft = styled.div`
  height: 100vh;
  width: 50vw;
  border-width: 2px;
  border-color: red;
  background-color: blue;
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

export const Body = props => {
  return (
    <ParentDiv>
      <LayoutDivLeft>
        <ExampleCard />
      </LayoutDivLeft>
      <LayoutDivRight></LayoutDivRight>
    </ParentDiv>
  )
}