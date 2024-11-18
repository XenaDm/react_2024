import React, {useEffect} from 'react';
import {useAppDispatch, useAppSelector, userSliceActions} from "./redux/store";


function App() {
const {users, user} = useAppSelector(state => state.userPart);

    const dispatch = useAppDispatch();

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(value => value.json())
            .then(users => {
                dispatch(userSliceActions.loadUsers);
                dispatch(userSliceActions.loadUser(1))
            });
    }, [dispatch]);
    return (
        <>
            {
                users.map((user) => (<div key={user.id}>{user.name}</div>))
            }
            {
                user && <div>{JSON.stringify(user)}</div>
            }
        </>
    );
}

export default App;