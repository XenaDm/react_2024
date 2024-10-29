import {createBrowserRouter} from "react-router-dom";
import ErrorPage from "../pages/ErrorPage";
import React from "react";
import MainLayout from "../layouts/MainLayout";
import UsersPage from "../pages/UsersPage";
import PostsPage from "../pages/PostsPage";
import CommentsPage from "../pages/CommentsPage";



export const browserRouter = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout/>,
        errorElement: <ErrorPage/>,
        children: [
            {
                path: 'users',
                element: <UsersPage/>,
            },


            {
                path: 'posts',
                element: <PostsPage/>
            },

            {
                path: 'comments',
                element: <CommentsPage/>
            }
        ]
    }
]);
