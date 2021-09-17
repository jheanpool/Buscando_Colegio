import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import './Hacemos_Ordenador.css';
import './Hacemos_Dispositivo.css';

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
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

          <div>
            <div className="hacemos">
              
            <p>Hacemos Todo Por Ti</p>

            </div>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}
