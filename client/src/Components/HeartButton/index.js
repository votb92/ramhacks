import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
  background-color: red;
  color: white;
`

const HeartButton = props => {
<svg id="Favorite" xmlns="http://www.w3.org/2000/svg" width="68" height="68" viewBox="0 0 68 68">
  <g id="Ellipse_59" data-name="Ellipse 59" fill="#fff" stroke="#aaa" stroke-width="1">
    <circle cx="34" cy="34" r="34" stroke="none"/>
    <circle cx="34" cy="34" r="33.5" fill="none"/>
  </g>
  <path id="Icon_feather-heart" data-name="Icon feather-heart" d="M31.26,6.915a8.25,8.25,0,0,0-11.67,0L18,8.505l-1.59-1.59A8.252,8.252,0,1,0,4.74,18.585l1.59,1.59L18,31.845l11.67-11.67,1.59-1.59a8.25,8.25,0,0,0,0-11.67Z" transform="translate(16.177 16.002)" fill="none" stroke="#aaa" stroke-linecap="round" stroke-linejoin="round" stroke-width="3"/>
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
export default HeartButton;
