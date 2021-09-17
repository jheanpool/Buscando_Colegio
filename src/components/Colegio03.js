import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import colegio01 from '../colegios/colegio01.jpg';
import '../App.css';

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


export default function CenteredGrid() {

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={12} md={3} lg={3}>

          <div className="imagen_colegio01">
            
          <img src={colegio01} alt="colegio01" height="100%" width="100%" />

          </div>

        </Grid>

        <Grid item xs={11} sm={11} md={11} lg={11}>

          <div className="anuncio">

            <p>Anuncio</p>

            <br></br>

          </div>

        </Grid>
      </Grid>
    </div>

  )
}
