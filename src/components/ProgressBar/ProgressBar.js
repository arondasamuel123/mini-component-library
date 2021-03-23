import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import VisuallyHidden from '../VisuallyHidden';

const STYLES = {
    small: {
      padding: 0,
      radius: 4,
    },
    medium: {
      padding: 0,
      radius: 4
    },
    large: {
      padding: 8,
      radius: 8
    }

}
const ProgressBar = ({ value, size }) => {
  const styles = STYLES[size];
  if(!styles) {
    throw new Error("Unkown size provided");
  }
  let Component;

  if(size === 'small') {
    Component = Bar;
  } else if(size === 'medium') {
    Component = MediumBar;
  } else {
    Component = LargeBar;
  }
  return (
    <Wrapper 
    role="progressbar" 
    aria-valuenow={value} 
    aria-valuemin="0" 
    aria-valuemax="100"
    style={{
      '--padding': styles.padding + 'px',
      '--radius': styles.radius + 'px',
    }}
    >

    <VisuallyHidden>{value}%</VisuallyHidden>
    <BarWrapper>
    <Component style={{width: value + '%'}}/>
    </BarWrapper>
   

    </Wrapper>
  )

  
};
const Wrapper = styled.div`
  background-color: ${COLORS.transparentGray15};
  border-radius: var(--radius);
  box-shadow: inset 0 2px 4px ${COLORS.transparentGray35};
  padding:var(--padding);
 
`;
const Bar = styled.div`
  width: var(--width);
  height:8px;
  background-color: ${COLORS.primary};
  border-radius: 4px 0 0 4px;
  padding: 4px; 

`;
const BarWrapper = styled.div`
  border-radius: 4px;
  overflow:hidden;
`;
const MediumBar = styled(Bar)`
  height: 12px;
`;
const LargeBar = styled(Bar)`
  height: 24px;

`;

export default ProgressBar;
