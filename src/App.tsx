import React, {useEffect} from 'react';
import {loadUsers, reduceUser, useAppDispatch, useAppSelector} from "./redux/store";


function App() {
const userSliceState = useAppSelector(state => state.userSliceHimself);

    const dispatch = useAppDispatch();

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(value => value.json())
            .then(users => {
                dispatch(loadUsers(users));
                dispatch(reduceUser(1));
            });
    }, [dispatch]);
    return (
        <>
            {
                userSliceState.users.map((user) => (<div key={user.id}>{user.name}</div>))
            }
        </>
    );
}

export default App;