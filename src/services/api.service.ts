import IUser from "../model/IUser";
import {ITodo} from "../model/Todo";

export const getUsers = async ()=>{
    let response:IUser[] = await fetch('http://jsonplaceholder.typicode.com/users')
        .then(value => value.json())
    return response;
}

export const getTodosOfUser = async (user: IUser)=>{
    let response:ITodo[] = await fetch('https://jsonplaceholder.typicode.com/todos?userId=' + user.id)
        .then(value => value.json())
    return response;
}