import axios from "axios";
import {ICart} from "../models/ICart";
import {IResponse} from "../models/IResponse";
import {IUser} from "../models/IUser";

const axiosInstance = axios.create({
    baseURL: "https://dummyjson.com",
    headers: {'Content-Type':"application/json"}
});

export const apiService = {
    cart:{
        getAll: async (page:number):Promise<IResponse & {carts:ICart[]}> => {
const skip = (page - 1)*5;
// const limit = (page - 1)*5;

           const {data} = await axiosInstance.get<IResponse & { carts:ICart[]}>('/carts',{
                params:{
                    skip: skip,
                    limit:5
                }
            });

            console.log(data)
            return data;
        }
    },
    user:{
        getAll: async (page:number):Promise<IResponse & {users:IUser[]}> => {
            const skip = (page - 1)*30;
// const limit = (page - 1)*5;

            const {data} = await axiosInstance.get<IResponse & { users:IUser[]}>('/users',{
                params:{
                    skip: skip,
                }
            });

            console.log(data)
            return data;
        }
    },
}
