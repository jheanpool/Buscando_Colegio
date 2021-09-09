import { BrowserRouter as Router, Switch, Route, Link, useParams, useRouteMatch, BrowserRouter } from "react-router-dom";
import React from 'react';
import './App.css';
import Entrada from './components/Entrada';
import Menu_Principal from './components/Menu_Principal';
import Principal from './components/Principal';
import Menu_Anuncio from './components/Menu_Anuncio';
import Anuncio from './components/Anuncio';
import Menu_Nosotros from './components/Menu_Nosotros';
import Nosotros from './components/Nosotros';
import Menu_Proceso from './components/Menu_Proceso';
import Proceso from './components/Proceso';
import Menu_Jardines_Cali from './components/Menu_Jardines_Cali';
import Informacion_Jardines_Cali from './components/Informacion_Jardines_Cali';
import Menu_Jardines_Bogota from './components/Menu_Jardines_Bogota';
import Informacion_Jardines_Bogota from './components/Informacion_Jardines_Bogota';
import Menu_Jardines_Medellin from './components/Menu_Jardines_Medellin';
import Informacion_Jardines_Medellin from './components/Informacion_Jardines_Medellin';
import Menu_Colegios_Cali from './components/Menu_Colegios_Cali';
import Informacion_Colegios_Cali from './components/Informacion_Colegios_Cali';
import Menu_Colegios_Bogota from './components/Menu_Colegios_Bogota';
import Informacion_Colegios_Bogota from './components/Informacion_Colegios_Bogota';
import Menu_Colegios_Medellin from './components/Menu_Colegios_Medellin';
import Informacion_Colegios_Medellin from './components/Informacion_Colegios_Medellin';
import Menu_Educacion_Virtual from './components/Menu_Educacion_Virtual';
import Informacion_Educacion_Virtual from './components/Informacion_Educacion_Virtual';
import Menu_Contacto from './components/Menu_Contacto';
import Contacto from './components/Contacto';
import Menu_Aliados from './components/Menu_Aliados';
import Aliados from './components/Aliados';



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

                    <Route path="/Anuncio">
                        <Menu_Anuncio />
                        <Anuncio />
                    </Route>

                    <Route path="/Nosotros">
                        <Menu_Nosotros />
                        <Nosotros />
                    </Route>

                    <Route path="/Proceso">
                        <Menu_Proceso />
                        <Proceso />
                    </Route>

                    <Route path="/Jardines_Cali">
                        <Menu_Jardines_Cali />
                        <Informacion_Jardines_Cali />
                    </Route>

                    <Route path="/Jardines_Bogotá">
                        <Menu_Jardines_Bogota />
                        <Informacion_Jardines_Bogota />
                    </Route>

                    <Route path="/Jardines_Medellín">
                        <Menu_Jardines_Medellin />
                        <Informacion_Jardines_Medellin />
                    </Route>

                    <Route path="/Colegios_Cali">
                        <Menu_Colegios_Cali />
                        <Informacion_Colegios_Cali />
                    </Route>

                    <Route path="/Colegios_Bogotá">
                        <Menu_Colegios_Bogota />
                        <Informacion_Colegios_Bogota />
                    </Route>

                    <Route path="/Colegios_Medellín">
                        <Menu_Colegios_Medellin />
                        <Informacion_Colegios_Medellin />
                    </Route>

                    <Route path="/Educación_Virtual">
                        <Menu_Educacion_Virtual />
                        <Informacion_Educacion_Virtual />
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