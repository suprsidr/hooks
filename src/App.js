import React, { useState } from 'react';
import './App.css';
import ColorSelector from './components/ColorSelector';
import ColorDisplay from './components/ColorDisplay';
import RangeSelector from './components/RangeSelector';

export const AppContext = React.createContext();

const App = () => {
  const [state, setState] = useState({ color: 'white', radius: 100 });

  /*
   * the setState we get from the hook does not do the shallow merge.
   * Nor does it take a second arg for callback
   */
  const updateState = (newState, cb = null) => {
    setState({
      ...state,
      ...newState
    });
    cb && cb();
  };

  return (
    <AppContext.Provider
      value={{
        state,
        setState: updateState
      }}
    >
      <div className="App">
        <header className="App-header">
          <ColorSelector />
          <RangeSelector />
          <ColorDisplay />
        </header>
      </div>
    </AppContext.Provider>
  );
};

export default App;
