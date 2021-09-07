import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import entrada from '../fondo_entrada/entrada.jpg';
import { BrowserRouter as Router, Switch, Route, Link, useParams, useRouteMatch, BrowserRouter } from "react-router-dom";
import './Entrada.css';

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

                    <div className="imagen_entrada">

                        <Link to="/Principal"><img src={entrada} alt="entrada" height="100%" width="100%" /></Link>

                    </div>

                </Grid>
            </Grid>
        </div>

    )
}
