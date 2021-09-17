import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import './Colegio01.css';
import colegio01 from '../colegios/colegio01.png';


const useStyles = makeStyles({
  root: {
    maxWidth: 500,
    backgroundColor: 'rgba(20,21,27,0)',
    boxShadow: '3px 3px 3px rgba(0, 0, 0, .0)',
    marginTop:'10px',
    marginLeft:'-100px',
    color: 'rgba(255,255,255,5)',
    display: 'flex',
    
  },
});

export default function ImgMediaCard() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      
      <CardActionArea>
        <CardMedia/>

        <div className="imagen_colegio01">
      
          <img src={colegio01} alt="colegio01" height="100%" width="120%" />

          </div>
        <CardMedia/>
        <CardContent>
        <div className="titulo_colegio01">
         
            <h1>Colegio Bennett</h1>
         
        </div>

        <div className="informacion_colegio01">
          <p>En el Colegio Bennett, manejamos pedagogia constructiva 
            con la cual despertamos la curiosidad y el amor por el aprendizaje 
            para formar a los líderes de un mundo cambiante.</p>
        </div>
           
        </CardContent>
      </CardActionArea>
      <CardActions>
      </CardActions>
     
    </Card>
  );
}
