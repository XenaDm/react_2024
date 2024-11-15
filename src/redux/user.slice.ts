import {IUser} from "../models/IUser";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";

type UserSliceType = {
    users: IUser[];
    user:IUser | null
}
const userInitState:UserSliceType ={
    users:[],
    user: null
}

export let userSlice = createSlice({
    name:'userSliceName',
    initialState:userInitState,
    reducers:{
        loadUsers: (state,action:PayloadAction<IUser[]>) => {state.users = action.payload},
        loadUser: (state,action:PayloadAction<IUser>) => {state.user = action.payload},
        reduceUser: (state,action:PayloadAction<number>) => {
            let id = action.payload
            let users = state.users.splice(id - 1, 1);
            state.users = users;
}
    }
});