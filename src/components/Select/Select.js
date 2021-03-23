import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import Icon from '../Icon';
import { getDisplayedValue } from './Select.helpers';

const Select = ({ label, value, onChange, children }) => {
  const displayedValue = getDisplayedValue(value, children);

  return (
    <Wrapper>
      <NativeSelect value={value} onChange={onChange}>
      {children}
    </NativeSelect>
    <PresentionalBit>
      {displayedValue}
      <IconWrapper style={{'--size': 24 + 'px'}}>
      <Icon id="chevron-down" strokeWidth={1} size={24} />
      </IconWrapper>
     
    </PresentionalBit>
    </Wrapper>
    
  );
};

const Wrapper = styled.div`
  position: relative;
  width: fit-content;
`;

const NativeSelect = styled.select`
  position:absolute;
  top:0;
  left: 0;
  width: 100%;
  height:100%;
  opacity: 0;

`;

const PresentionalBit = styled.div`
  color: ${COLORS.gray700};
  background-color: ${COLORS.transparentGray15};
  font-size: 1rem;
  padding: 12px 16px;
  padding-right: 52px;
  border-radius:8px;
  /* This is used to add the default focus ring of Chrome to an element that isn't exactly focused*/
  ${NativeSelect}:focus + & {
    outline: 1px dotted #212121;
    outline: 5px auto -webkit-focus-ring-color;
  }
  /* This the same thing but for hover state. This moves the hover state from the select element to the presentational one*/
  ${NativeSelect}:hover + & {
    color: black;
  }
`;
const IconWrapper = styled.div`
  /* A fixed width and height is required for the icon to be centered  */
  position:absolute;
  top: 0;
  bottom:0;
  right:10px;
  margin: auto;
  width: var(--size);
  height: var(--size);
  /*This allows the area of the icon to be clickable. This is an alternative to giving the 
  NativeSelect Component a higher z-index than the IconWrapper Component
  */
  pointer-events:none;
`;
export default Select;
