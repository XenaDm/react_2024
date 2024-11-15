import React, {useEffect} from 'react';
import UserComponent from "./UserComponent";
import {useStore} from "../stores/store";


const UsersComponent = () => {
    let {userStoreSlice:{allUsers, loadUsers}} = useStore();
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(value => value.json())
            .then(value => {
                loadUsers(value)
            });
    },[]);
    return (
        <>
            {
                allUsers.map(user => <UserComponent user={user} key={user.id}/>)
            }
        </>
    );
};

export default UsersComponent;