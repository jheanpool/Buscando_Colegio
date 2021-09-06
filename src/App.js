import { BrowserRouter as Router, Switch, Route, Link, useParams, useRouteMatch, BrowserRouter } from "react-router-dom";
import React from 'react';
import './App.css';
import Entrada from './components/Entrada';
import Menu_Inicio from './components/Menu_Inicio';
import Menu_Nosotros from './components/Menu_Nosotros';
import Inicio from './components/Inicio';
import Nosotros from './components/Nosotros';



function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Switch>

                    <Route exact path="/">
                        <Entrada />
                    </Route>

                    <Route exact path="/Inicio">
                        <Menu_Inicio />
                        <Inicio />
                    </Route>

                    <Route path="/Nosotros">
                        <Menu_Nosotros />
                        <Nosotros />
                    </Route>

                </Switch>
            </BrowserRouter>
        </div>

    );
};

export default App;