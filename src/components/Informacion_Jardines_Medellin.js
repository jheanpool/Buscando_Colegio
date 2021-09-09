import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
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
        <Grid item xs={12} sm={12} md={12} lg={12}>

          <div className="imagen">
            

          </div>

        </Grid>

        <Grid item xs={11} sm={11} md={11} lg={11}>

          <div className="medellin">

            <p>Jardines Medellín</p>

            <br></br>

          </div>

        </Grid>
      </Grid>
    </div>

  )
}
