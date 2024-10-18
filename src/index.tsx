import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import AboutPage from "./pages/about/AboutPage";
import ContactsPage from "./pages/contacts/ContactsPage";
import ErrorLayout from "./layouts/error/ErrorLayout";
import SingleContactPage from "./components/contact/SingleContactPage";


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
const router = createBrowserRouter([
    {
        path:'/',
        element:<MainLayout/>,
        errorElement:<ErrorLayout/>,
        children:[
            {
                path:'about', /*/about*/
                element: <AboutPage/>
            },
            {
                path:'contacts', /*/contacts*/
                element: <ContactsPage/>
            },
            {
                path: 'contacts/:id',
                element:<SingleContactPage/>
            },
            {
                element:<AboutPage/>, index: true,
            }
        ]},

]);
root.render(
<RouterProvider router={router}/>
);
