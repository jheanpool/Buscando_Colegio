import React, { useState } from 'react'
import Button from '@material-ui/core/Button';
import { BrowserRouter as Router, Switch, Route, Link, useParams, useRouteMatch } from "react-router-dom";
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import logo_menu from '../logo_buscando_colegio/logo_menu.png';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import { Icon } from '@material-ui/core';
import './Menu_Ordenador.css';
import './Menu_Dispositivo.css';
import Pestaña_Jardines from '../components/Pestaña_Jardines';
import Pestaña_Colegios from '../components/Pestaña_Colegios';
import Pestaña_Educacion_Virtual from '../components/Pestaña_Educacion_virtual';


const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(3),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
  }),
);

function App() {
  const [show, setShow] = useState(true)

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);

  };


  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={12} md={12} lg={12}>

          <div className="App">

            <div className="toggle">

              <Button onClick={() => setShow(!show)} ><svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" class="bi bi-list" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z" />
              </svg></Button>

            </div>

            <div className="Logo_menu">
              <img src={logo_menu} alt="logo_menu" width="130" />
            </div>

            {
              show ?



                <div className="navbar">

                  <div className="Logo_menu01">
                    <img src={logo_menu} alt="logo_menu" width="130" />
                  </div>

               

                    <Link to="/Principal">Principal</Link>

                 
                  <Link to="/Nosotros">Nosotros</Link>

              

                    <Link to="/Proceso">Proceso</Link>

                
                  

                  <Switch>

                    <Route exact path="/Contacto">

                    <div className="boton_submenu">
                    
                    </div>

                      <div className="boton_jardines">
                        <Pestaña_Jardines />
                      </div>
                     

                      <div className="boton_colegios">
                        <Pestaña_Colegios />
                      </div>

                      <div className="boton_educacion_virtual">
                        <Pestaña_Educacion_Virtual />
                      </div>

                    </Route>

                  </Switch>


                  <Link to="/Contacto">Contacto</Link>

                  <Link to="/Aliados">Aliados</Link>

                  <br></br>

                </div>

                : null
            }

          </div>
        </Grid>
      </Grid>
    </div>
  );
}
export default App;