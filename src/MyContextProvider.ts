import {createContext} from "react";
import {IUser} from "./models/IUser";

type StoreType = {
    userStoreSlice:{
        allUsers: IUser[],
        user: IUser| null
    }
}

export let defaultStoreValue:StoreType = {
    userStoreSlice:{
        allUsers:[],
    user:null
    }
};
export let MyContext = createContext<StoreType>(defaultStoreValue)