import { BrowserRouter as Router, Switch, Route, Link, useParams, useRouteMatch, BrowserRouter } from "react-router-dom";
import React from 'react';
import './App.css';
import Entrada from './components/Entrada';
import Menu_Principal from './components/Menu_Principal';
import Principal from './components/Principal';
import Anuncio from './components/Anuncio';
import Nosotros from './components/Nosotros';
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
import Contacto from './components/Contacto';
import Colegio01 from './components/Colegio01';
import Somos_La_Guia from './components/Somos_La_Guia';
import Hacemos from './components/Hacemos';
import Boton_Mas_Informacion from './components/Boton_Mas_Informacion';
import Iconos_Footer from './components/Iconos_Footer';


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
                        <Somos_La_Guia />
                        <Hacemos />
                        <Boton_Mas_Informacion />
                        <Principal />
                        <Iconos_Footer/>
                    </Route>

                    <Route path="/Anuncio">
                        <Menu_Principal />
                        <Anuncio />
                        <Colegio01 />
                        <Iconos_Footer/>
                    </Route>

                    <Route path="/Nosotros">
                        <Menu_Principal />
                        <Nosotros />
                    </Route>

                    <Route path="/Proceso">
                        <Menu_Principal />
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
                        <Menu_Principal />
                        <Contacto />
                    </Route>

                </Switch>
            </BrowserRouter>
        </div>

    );
};

export default App;