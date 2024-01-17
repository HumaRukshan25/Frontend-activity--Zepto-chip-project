import React from 'react';
import './App.css';
import ChipInput from './components/ChipInput.tsx';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* Remove or comment out the default content */}
        {/* <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}

        {/* Add the ChipInput component */}
        <ChipInput />
      </header>
    </div>
  );
}

export default App;
