import React from 'react';
import {createBrowserRouter} from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import ErrorPage from "../pages/ErrorPage";
import CartsPage from "../pages/CartsPage";
import HomePage from "../pages/HomePage";
import UsersPage from "../pages/UsersPage";

const browserRouter = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout/>,
        errorElement:<ErrorPage/>,
        children: [
            {index:true, element:<HomePage/>},
            {path: 'carts', element: <CartsPage/>,},
            {path: 'users', element: <UsersPage/>}
        ]
    }
        ])




export default browserRouter;