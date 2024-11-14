import {createContext} from "react";
import {IUser} from "./models/IUser";

type StoreType = {
    userStoreSlice:{
        allUsers: IUser[],
        user: IUser| null,
        fillUsers:(value:IUser[])=>void
    }
}

export let defaultStoreValue:StoreType = {
    userStoreSlice:{
        allUsers:[],
    user:null,
        fillUsers:(value:IUser[])=>{
            defaultStoreValue.userStoreSlice.allUsers = value;
        }
    }
};
export let MyContext = createContext<StoreType>(defaultStoreValue)