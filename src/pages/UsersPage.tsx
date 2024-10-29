import React, {useEffect, useState} from 'react';
import {IUser} from "../models/IUser";
import {apiService} from "../services/api.service";
import UserComponent from "../components/UserComponent";


const UsersPage = () => {
    const [users, setUsers] = useState<IUser[]>([]);
    useEffect(() => {
        apiService.usersService.getAll<IUser[]>('/users').then(value => setUsers([...value]));
    },[]);

    return (
        <div>
            {
                users.map(value =>
                    <div>{value.id} - {value.name}
                        <UserComponent key={value.id} item={value}/>
                    </div>
                )
            }
        </div>
    );
};

export default UsersPage;