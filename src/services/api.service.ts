import axios from "axios";

const axiosInstance = axios.create({
baseURL: 'https://jsonplaceholder.typicode.com',
    headers: {}
});
const getAll = async <T,> (endpoint:string)=>{
    const {data} = await axiosInstance.get<T>(endpoint)
    return data;
}

export const apiService ={
    usersService: {
        getAll
    },
    postsService:{
            getAll
    },
    commentsService:{
            getAll
    },
}



