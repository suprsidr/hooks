import React, { useContext } from 'react';
import styled from 'styled-components';
import { AppContext } from '../App';

const Ball = styled.div`
  height: ${props => props.radius + 'px'};
  width: ${props => props.radius + 'px'};
  background: ${props => props.color};
  background: radial-gradient(
    ellipse at center,
    white 0%,
    ${props => props.color} 100%
  );
  border-radius: 50%;
`;

export default () => {
  const { state } = useContext(AppContext);

  return <Ball {...state} />;
};
