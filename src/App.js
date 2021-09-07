import { BrowserRouter as Router, Switch, Route, Link, useParams, useRouteMatch, BrowserRouter } from "react-router-dom";
import React from 'react';
import './App.css';
import Entrada from './components/Entrada';
import Principal from './components/Principal';
import Menu_Principal from './components/Menu_Principal';
import Nosotros from './components/Nosotros';
import Menu_Nosotros from './components/Menu_Nosotros';
import Proceso from './components/Proceso';
import Menu_Proceso from './components/Menu_Proceso';
import Contacto from './components/Contacto';
import Menu_Contacto from './components/Menu_Contacto';
import Aliados from './components/Aliados';
import Menu_Aliados from './components/Menu_Aliados';


function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Switch>

                    <Route exact path="/">
                        <Entrada />
                    </Route>

                    <Route exact path="/Principal">
                        <Menu_Principal />
                        <Principal />
                    </Route>

                    <Route path="/Nosotros">
                        <Menu_Nosotros />
                        <Nosotros />
                    </Route>

                    <Route path="/Proceso">
                        <Menu_Proceso />
                        <Proceso />
                    </Route>

                    <Route path="/Contacto">
                        <Menu_Contacto />
                        <Contacto />
                    </Route>

                    <Route path="/Aliados">
                        <Menu_Aliados />
                        <Aliados />
                    </Route>

                </Switch>
            </BrowserRouter>
        </div>

    );
};

export default App;