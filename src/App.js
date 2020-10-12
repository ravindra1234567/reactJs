import React from 'react';
import './App.css';
import Home from './Home.js';
import ClassState from './ClassState.js';
import HideShow from './HideShow.js';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        
       
       { <Home/>}
       {<ClassState/>}
       {<HideShow />}
      </header>
    </div>
  );
}

export default App;
