import axios from "axios";

const axiosInstance = axios.create({
    baseURL:'https://jsonplaceholder.typicode.com/',
    headers:{"Content-Type":"application/json"}
});

export const apiService = {
    userService:{
        getUsers: async () =>{
return await axiosInstance.get('users');
        }
    },
    postService:{
        getPosts: async () =>{
return await axiosInstance.get('posts');
        }
    },
    commentService:{
        getComments: async () =>{
return await axiosInstance.get('comments');
        }
    }
}