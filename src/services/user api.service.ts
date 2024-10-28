import {IUser} from "../models/IUser";
import axios from "axios";

const axiosInstance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com',
    headers: {}
});

export const userService= async (userId: number):Promise<IUser> =>{
    const {data} = await axiosInstance.get(`/users/${userId}`);
    return data;
}