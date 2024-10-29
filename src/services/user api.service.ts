import {IUser} from "../models/IUser";
import axios, {AxiosResponse} from "axios";

const axiosInstance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com',
    headers: {}
});

export const getUser= async (userId: number):Promise<AxiosResponse<IUser>> =>{
    const {data} = await axiosInstance.get('/users/' + userId);
    return data;
}