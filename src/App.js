import React from 'react';
import './App.css';
import Home from './Home.js';
import ClassState from './ClassState.js';
import HideShow from './HideShow.js';
import Events from './Events.js';
import Hooks from './Hooks.js';
import Form from './Form';
import FormValidation from "./FormValidation.js";
import FunctionEvent from './FunctionEvent.js';
import Listing from './Listing.js';
import Style from './Style.js';


import {BrowserRouter as Router , Route , Link} from "react-router-dom";
import Home1 from "./cmp/Home.js";
import About from "./cmp/About.js";
import Form1 from "./cmp/Form.js";
import { BrowserRouter } from 'react-router-dom';

import Bootstrap from "./Bootstrap.js";
import Modal1 from "./Modal1.js";



import CallApi from "./CallApi.js";
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
       {<Form/>}
       {<FormValidation/>}
       {<Listing />}
      {<Style data = "apply3"/>}
      {<CallApi />}
      {<Modal1 />}
      </header>
      {<Bootstrap />}
      <Router>
        <Link to = "">  Home  </Link>
        <Link to = "/form">  Form  </Link>
        <Link to = "/about">  About  </Link>

        <Route exact path = "/" component={Home1} /> 
        <Route path="/form" component= {Form1} />
        <Route path="/about" component={About} />
      </Router>

    </div>
  );
}

export default App;
