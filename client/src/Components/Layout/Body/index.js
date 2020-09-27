import React from 'react';
import styled from 'styled-components';

const LayoutDiv = styled.div`
  height: 100vh;
  width: 50vw;
  border-width: 2px;
  border-color: red;
  background-color: blue;
  display: flex;
`

export const Body = props => {
  return (
    <div>
      <LayoutDiv></LayoutDiv>
      <LayoutDiv></LayoutDiv>
    </div>
  )
}