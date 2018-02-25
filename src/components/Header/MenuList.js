import React from 'react';
import {Link} from 'react-router-dom';


const MenuList = () => (
    <div>
        <h1>Menu</h1>
        <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/reduxform">Redux Form</Link></li>
            <li><Link to="/formatedinputs">Formated Inputs</Link></li>
        </ul>
    </div>
);
export default MenuList