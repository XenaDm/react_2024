import React, {FC, useEffect, useState} from 'react';
import './App.css';
import IUser from "./model/IUser";
import UserComponent from "./components/user/UserComponent";
import {getUser, getUsers} from "./services/user api.service";
import PostsComponent from "./components/posts/PostsComponent";
import {IPost} from "./model/IPost";
import {getPostsOfUser} from "./services/post api.service";
import Users from "./components/users/Users";
import {ITodo} from "./model/Todo";
import {getTodosOfUser} from "./services/api.service";


const App: FC = () =>
// {
//
//     const [users, setUsers] = useState<IUser[]>([])
//     const [posts,setPosts] = useState<IPost[]>([]);
//     const [userId,setUserId] = useState<number>(0)
//
//     useEffect(() => {
// getUsers()
//     // .then(value => {
//     //     setUsers(value);
//     // });
//     .then(value => {
//         setUsers(value.data);
//     });
//
//     }, []);
//
//     useEffect(()=>{
//         if (userId !== 0){
//             getPostsOfUser(userId).then(value => setPosts(value.data));
//         }
//     },[userId])
//
//     const clickHandler =(id:number)=>{
//         console.log(id)
//         setUserId(id);
//     }

//     return (
//         <>
//             {
//                 // users.map(({name,id}) => <div key={id}> {id} {name}</div>)
//                 users.map(({email,username,name,id},index) => <UserComponent
//                     key={index}
//                     id={id}
//                     name={name}
//                     email={email}
//                     username={username}
//                     clickHandler={clickHandler}
//                 />)
//             }
//             <div>
//                 <PostsComponent posts={posts}/>
//             </div>
// </>
// );
{
const [todos, setTodos] = useState<ITodo[]>([]);

    const lift = (user:IUser) => {
        getTodosOfUser(user)
            .then((response:ITodo[]) => {
                setTodos(response);
            })
    }
    return(
<div>
    <hr/>
    {
        todos.map(todo=><div key={todo.id}>{todo.title}</div>)
    }
    <hr/>
    <Users lift={lift}/>
</div>
    )
}

export default App;
