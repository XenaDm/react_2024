import {createBrowserRouter} from "react-router-dom";
import App from "./App";
import UsersPage from "./pages/UsersPage";

export const routes = createBrowserRouter([
    {path:'/', element:<App/>, children:[
            {path:'users', element:<UsersPage/>}
        ]},
])