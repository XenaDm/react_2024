import {createBrowserRouter} from "react-router-dom";
import App from "./App";
import LoadUsersPage from "./pages/LoadUsersPage";
import ShowUsersPage from "./pages/ShowUsersPage";

export const routes = createBrowserRouter([
    {path:'/', element:<App/>, children:[
            {path:'users', element:<LoadUsersPage/>},
            {path:'show', element:<ShowUsersPage/>},
        ]},
])