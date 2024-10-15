import React, {FC, useEffect, useState} from 'react';
import './App.css';
import IUser from "./model/IUser";
import UserComponent from "./components/user/UserComponent";


const App: FC = () => {

    const [users, setUsers] = useState<IUser[]>([])

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(value => value.json())
            .then(value => {
                setUsers(value);
            });
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
