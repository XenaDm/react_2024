import React, {useEffect} from 'react';
import {Outlet} from "react-router-dom";
import HeaderComponent from "../components/HeaderComponent";
import {apiService} from "../services/api.service";
import {useStore} from "../stores/store";


const MainLayout = () => {
const {userStoreSlice, commentStoreSlice, postStoreSlice} =useStore();
    useEffect(() => {
        apiService.userService.getUsers().then(value => userStoreSlice.loadUsers(value.data))
    }, []);
    useEffect(() => {
        apiService.postService.getPosts().then(value => postStoreSlice.loadPosts(value.data))
    }, []);
    useEffect(() => {
        apiService.commentService.getComments().then(value => commentStoreSlice.loadComments(value.data))
    }, []);

    return (
        <>
                <HeaderComponent/>
            <hr/>
                <Outlet/>
        </>
    );
};
export default MainLayout;