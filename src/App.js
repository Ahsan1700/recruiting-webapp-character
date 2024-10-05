import React from 'react';
import './App.css';
import PartyContainer from './containers/PartyContainer.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>React Exercise - Party Creator</h1>
      </header>
      <section className="App-section">
        <div>
          <PartyContainer/>
        </div>
      </section>
    </div>
  );
}

export default App;
