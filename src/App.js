import { BrowserRouter as Router, Switch, Route, Link, useParams, useRouteMatch, BrowserRouter } from "react-router-dom";
import React from 'react';
import './App.css';
import Entrada from './components/Entrada';

function App() {
    return (
      <div className="App">
        <BrowserRouter>
          <Switch>
  
            <Route exact path="/">
              <Entrada />
            </Route>
  
            <Route exact path="/Entrada">
              <Sonido_Entrada />
              <Entrada />
            </Route>

          </Switch>
        </BrowserRouter>
      </div>
  
    );
  };
  
  export default App;