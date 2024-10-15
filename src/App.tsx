import React, {FC, useEffect, useState} from 'react';
import './App.css';
import IUser from "./model/IUser";
import UserComponent from "./components/user/UserComponent";
import {getUsers} from "./services/user api.service";


const App: FC = () => {

    const [users, setUsers] = useState<IUser[]>([])

    useEffect(() => {
getUsers()
    .then(value => {
        setUsers(value);
    })
    }, []);

    const [userId, setUserId] = useState<number>(0);

    const clickHandler =(id:number)=>{
        console.log(id)
        setUserId(id);
    }

    return (
        <>
            {
                // users.map(({name,id}) => <div key={id}> {id} {name}</div>)
                users.map(({email,username,name,id},index) => <UserComponent
                    key={index}
                    id={id}
                    name={name}
                    email={email}
                    username={username}
                    clickHandler={clickHandler}
                />)
            }
            <h2>{userId}</h2>
</>
);
}


export default App;
