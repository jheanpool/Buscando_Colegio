import React from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import { BrowserRouter as Router, Switch, Route, Link, useParams, useRouteMatch } from "react-router-dom";
import './Pestaña_Jardines_Ordenador.css';

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
      <div className="boton_jardines">
      <link to=""></link><Button aria-controls="fade-menu" aria-haspopup="true" onClick={handleClick}>Jardines<ArrowDropDownIcon /></Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <div className="submenu_jardines">
        <MenuItem onClick={handleClose}><Link to="/Jardines_Cali">Cali</Link></MenuItem>
        <MenuItem onClick={handleClose}><Link to="/Jardines_Bogotá">Bogotá</Link></MenuItem>
        <MenuItem onClick={handleClose}><Link to="/Jardines_Medellín">Medellín</Link></MenuItem>
        </div>
      </Menu>
    </div>
    </div>
  );
}
