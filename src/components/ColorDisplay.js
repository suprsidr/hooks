import React, { useContext } from 'react';
import { AppContext } from '../App';

export default () => {
  const { state } = useContext(AppContext);

  return (
    <div style={{ background: state.color, height: '100px', width: '100px' }} />
  );
};
