import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="container">
      <div className="word">Walking</div>
      <div className="tense">Present Continuous</div>
      <div className="genus">I/You</div>
      <div className="input-group">
        <input type="text" placeholder="be" />
        <input type="text" placeholder="verb form" />
      </div>
      <button className="tip-button">Show Tip</button>
      <div className="tip" id="tip">Tip: Use 'am/is/are' for present continuous.</div>
    </div>
  );
}

export default App;
