import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import ColorSelector from './components/ColorSelector';
import ColorDisplay from './components/ColorDisplay';

export const AppContext = React.createContext();

const App = () => {
  const [state, setState] = useState({ color: 'white' });

  return (
    <AppContext.Provider
      value={{
        state,
        setState
      }}
    >
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <ColorSelector />
          <ColorDisplay />
        </header>
      </div>
    </AppContext.Provider>
  );
};

export default App;
