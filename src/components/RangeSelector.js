import React, { useContext } from 'react';
import { AppContext } from '../App';

export default () => {
  const { state, setState } = useContext(AppContext);
  const changeHandler = e => setState({ radius: e.target.value });

  return (
    <div>
      <p>
        <label for="radius">Radius</label>
      </p>
      <input
        type="range"
        name="radius"
        min="100"
        max="500"
        step="20"
        value={state.radius}
        onChange={changeHandler}
      />
    </div>
  );
};
