import React, {useEffect, useState} from 'react';
import {IUser} from "../models/IUser";
import {apiService} from "../services/api.service";
import User from "../components/User";

const UsersPage = () => {
    const [users, setUsers] = useState<IUser[]>([]);
    useEffect(() => {
        apiService.usersService.getAll<IUser[]>('/users').then(value => setUsers([...value]));
    },[]);

    return (
        <div>
            {
                users.map(value => <div>{value.name} <User key={value.id} item={value}/>
                </div>)
            }
        </div>
    );
};

export default UsersPage;