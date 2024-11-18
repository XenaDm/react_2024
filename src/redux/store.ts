import {configureStore, createAsyncThunk, createSlice, isFulfilled, isRejected, PayloadAction} from "@reduxjs/toolkit";
import {useDispatch, useSelector} from "react-redux";
import {IUser} from "../models/IUser";

type  UserSliceType={
    users: IUser[];
    user: IUser | null
}

const userInitState:UserSliceType = {
    users:[],
    user: null

}

const loadUsers = createAsyncThunk('userSlice/loadUsers',async (_, thunkAPI) => {
    try{
        let usersFromAPI = await fetch('https://jsonplaceholder.typicide.com/users/')
            .then(value => value.json());
        return thunkAPI.fulfillWithValue(usersFromAPI)
    }catch (error){
        return thunkAPI.rejectWithValue(error);
    }

} )//зазвичай робиться через сервiс, економ часу
const loadUser = createAsyncThunk('userSlice/loadUser', async (id:number, thunkAPI) => {
    try{
        let user = await fetch('https://jsonplaceholder.typicide.com/users/'+id)
            .then(value => value.json())
        return thunkAPI.fulfillWithValue(user)
    } catch (e){
        return thunkAPI.rejectWithValue(e)
    }

})

let userSlice = createSlice({
    name:'userSlice',
    initialState: userInitState,
    reducers:{},
    extraReducers: builder => builder
        .addCase(loadUsers.fulfilled, (state, action:PayloadAction<IUser[]>)=>{
            state.users = action.payload
        })
        .addCase(loadUsers.rejected,(state, action:PayloadAction<any>) => {
            console.log(action.payload);
        })
        .addCase(loadUser.fulfilled, (state, action:PayloadAction<IUser>) => {
            state.user = action.payload
        })
        .addCase(loadUser.rejected, (state, action) => {})
        .addMatcher(isRejected(loadUser,loadUsers), (state, action) => {})
        .addMatcher(isFulfilled(loadUsers, loadUser), (state, action) => {})

});//.addCase(loadUsers.rejected,(state, action:PayloadAction<any>) - замість <any> там буде axiosError

export const userSliceActions = {
    ...userSlice.actions,
    loadUsers, loadUser
}

export let store = configureStore({
    reducer: {
        userPart: userSlice.reducer
    }
});

export let useAppDispatch = useDispatch.withTypes<typeof  store.dispatch>();

export let useAppSelector = useSelector.withTypes<ReturnType<typeof store.getState>>();

