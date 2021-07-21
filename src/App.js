import { BrowserRouter as Router, Switch, Route, Link, useParams, useRouteMatch, BrowserRouter } from "react-router-dom";
import React from 'react';
import './App.css';
import Entrada from './components/Entrada';
import Inicio from './components/Inicio';

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Switch>

                    <Route exact path="/">
                        <Entrada />
                    </Route>

                    <Route exact path="/Inicio">
                        <Inicio />
                    </Route>

                </Switch>
            </BrowserRouter>
        </div>

    );
};

export default App;