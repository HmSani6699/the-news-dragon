import {createBrowserRouter} from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import Categori from "../pages/Home/Categori/Categori";


const router =createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/categor/:id',
                element:<Categori></Categori>
            }
        ]
    }
])

export default router;