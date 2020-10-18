import React from 'react';
import logo from './logo.png';
import './App.css';
import KommunicateChat from './chat'

function App() {
 
  return (
    
    <div className="App">
      <KommunicateChat/>
      <header className="App-header">
        <img src="https://www.illinois16thjudicialcircuit.org/PublishingImages/coronaviruslogo.png" />
        <p>
          Click on the chat bot in the corner to learn more about coronavirus facts and safe practices!
        </p>
        <a
          className="App-link"
          href="https://github.com/ramyac6/BlackRockreact"
          target="_blank"
          rel="noopener noreferrer"
        >
          See the source code
        </a>
      </header>
    </div>
  );
}


export default App;
