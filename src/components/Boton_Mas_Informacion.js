import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import {BrowserRouter as Router,Switch,Route,Link,useParams,useRouteMatch} from "react-router-dom";
import './Boton_Mas_Informacion_Ordenador.css';
import './Boton_Mas_Informacion_Dispositivo.css';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {

    
  
    },
  },
}));

export default function ContainedButtons() {
  const classes = useStyles();

  return (
    <div className={classes.root}>

      <div className="boton">
      
      <Button>
          <div className="boton_texto">
              <Link to="/Mas_Informacion">Más Información</Link>
          </div>
      </Button>
   
    </div>

    </div>
  );
}
