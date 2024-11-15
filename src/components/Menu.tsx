import React from 'react';
import {Link} from "react-router-dom";


const Menu = () => {

    return (
        <div>
            <span><Link to={'/'}>Home Page</Link></span>
            <ul>
                <li><Link to={'/users'}>Users Page</Link></li>
                <li><Link to={'/posts'}>Posts Page</Link></li>
                <li><Link to={'/comments'}>Comments Page</Link></li>
                <li><Link to={'/postComments'}>Posts & Comments Page</Link></li>
            </ul>
        </div>
    );
};

export default Menu;