import {useEffect, useState} from "react";
import {IUser} from "../models/IUser";

export const useFetch = ()=>{

    const [users, setUsers] = useState<IUser[]>([]);
    useEffect(() => {
        fetch('http://jsonplaceholder.typicode.com/users')
            .then(value => value.json()
                .then(data => setUsers(data)));
    }, []);
    return users;
}//хук який буде витягувати данні