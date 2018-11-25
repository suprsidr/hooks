import React, { useContext } from 'react';
import { AppContext } from '../App';

const arr = ['white', 'yellow', 'blue', 'red', 'black'];

export default () => {
  const { state, setState } = useContext(AppContext);
  const changeHandler = e => {
    const newState = {
      ...state,
      color: e.target.value
    };
    setState(newState);
  };
  return (
    <select value={state.color} onChange={changeHandler}>
      {arr.map(i => (
        <option key={i} value={i}>
          {i}
        </option>
      ))}
    </select>
  );
};
