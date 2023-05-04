import {createBrowserRouter} from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import Categori from "../pages/Home/Categori/Categori";
import NewsLayout from "../Layout/NewsLayout";
import News from "../pages/News/News/News";


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
                element:<Categori></Categori>,
                loader:({params})=>fetch(`http://localhost:5000/categoris/${params.id}`)
            }
        ]
    },
    {
        path:'news',
        element:<NewsLayout></NewsLayout>,
        children:[
            {
                path:':id',
                element:<News></News>,
                loader:({params})=>fetch(`http://localhost:5000/news/${params.id}`)
            }
        ]
    }
])

export default router;