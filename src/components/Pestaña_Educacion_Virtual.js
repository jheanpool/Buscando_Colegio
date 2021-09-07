import React from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import { BrowserRouter as Router, Switch, Route, Link, useParams, useRouteMatch } from "react-router-dom";
import './Pestaña_Educacion_Virtual_Ordenador.css';

export default function SimpleMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <div className="boton_educacion_virtual">
      <link to=""></link><Button aria-controls="fade-menu" aria-haspopup="true" onClick={handleClick}>Educación<ArrowDropDownIcon /></Button>
      </div>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <div className="submenu_educacion_virtual">
        <MenuItem onClick={handleClose}><Link to="/Cali">Cali</Link></MenuItem>
        <MenuItem onClick={handleClose}><Link to="/Bogotá">Bogotá</Link></MenuItem>
        <MenuItem onClick={handleClose}><Link to="/Medellín">Medellín</Link></MenuItem>
        </div>
      </Menu>
    </div>
  );
}
