import React from 'react';
import './App.css';
import Home from './Home.js';
import ClassState from './ClassState.js';
import HideShow from './HideShow.js';
import Events from './Events.js';
import Hooks from './Hooks.js';
import FunctionEvent from './FunctionEvent.js';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        
       
       { <Home/>}
       {<ClassState/>}
       {<HideShow />}
       {<Events/>}
       {<FunctionEvent/>}
       {<Hooks/>}
      </header>
    </div>
  );
}

export default App;
