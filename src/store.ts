import {create} from "zustand/react";
import {IUser} from "./models/IUser";

type StoreType ={
    userSlice:{
        allUsers:IUser[];
        loadUsers:(users:IUser[])=> void
    }
}
export let useStore = create<StoreType>()((set)=>{
return{
userSlice:{
    allUsers:[],
    loadUsers: (users)=>{
return set(state => ({
    ...state,
    userSlice: {
        ...state.userSlice,
        allUsers: users
    }
}))
    }
}

}
})