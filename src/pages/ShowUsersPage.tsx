import React from 'react';
import {useStore} from "../store";


const ShowUsersPage = () => {
    let {userSlice:{allUsers}} = useStore();
    return (
        <div>
            {
allUsers.map(user => <div>{user.firstName}</div>)
            }
        </div>
    );
};

export default ShowUsersPage;