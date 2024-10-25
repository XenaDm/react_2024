import React from 'react';
import {Link} from "react-router-dom";
import users from "./users/Users";

const Menu = () => {
    return (
        <div>
            <ul>
                <li>
                    <Link to="users">users</Link>
                </li>
                <li>
                    <Link to="posts">posts</Link>
                </li>
                <li>
                    <Link to="comments">comments</Link>
                </li>
            </ul>
        </div>
    );
};

export default Menu;