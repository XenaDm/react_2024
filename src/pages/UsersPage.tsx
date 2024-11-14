import React, {useContext, useEffect} from 'react';
import {MyContext} from "../MyContextProvider";

const UsersPage = () => {

    const context = useContext(MyContext)
    useEffect(() => {
        fetch('https://dummyjson/users')
            .then(value => value.json())
            .then(value => {
                context.userStoreSlice.fillUsers(value.users)
            })
    }, []);

    return (
        <div>
            {context.userStoreSlice.allUsers.map((user) => (<div key={user.id}>{user.id}. {user.firstName} {user.lastName}</div>))}
        </div>
    );
};

export default UsersPage;