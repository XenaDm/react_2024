import React, {FC} from 'react';
import {Link, NavLink, useNavigate} from "react-router-dom";

const ContactComponent:FC<any> = ({contact}) => {
    const navigate = useNavigate();
    const onClickNavigateHandler = () => {
navigate(contact.id.toString(), {state:{contact}});
    };
    return (
        <div>
            {contact.email} <Link to={contact.id.toString()} state={{contact}}>details</Link> or <button onClick={onClickNavigateHandler}>btn details</button>
        </div>
    );
};

export default ContactComponent;