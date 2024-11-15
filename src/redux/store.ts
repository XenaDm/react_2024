import {configureStore} from "@reduxjs/toolkit";
import {useDispatch, useSelector} from "react-redux";
import {userSlice} from "./user.slice";




export let {loadUser,loadUsers, reduceUser} = userSlice.actions

export const store = configureStore({
    reducer:{
        userSliceHimself: userSlice.reducer
    }
});

export  const useAppDispatch = useDispatch.withTypes<typeof store.dispatch>();
export const useAppSelector = useSelector.withTypes<ReturnType<typeof store.getState>>();