import React from 'react';
import {NavLink} from "react-router-dom";

const Menu = () => {
    return (
        <div>
            <NavLink to={'/'}>Home</NavLink> <NavLink to={'carts'}>Carts</NavLink> <NavLink to={'users'}>Users</NavLink>
            <hr/>
        </div>

    );
};

export default Menu;