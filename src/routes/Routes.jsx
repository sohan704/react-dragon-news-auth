import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Home/Register";
import Page from "../pages/NewsPage/Page";
import PrivateRoute from "./privateRoute";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>, 
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch('/news.json')
            },
            {
                path:'/news/:id',
                element: <PrivateRoute><Page></Page></PrivateRoute>
                
            },
            {
                path:'/login',
                element: <Login></Login>
            }
            ,{
                path:'/register',
                element: <Register></Register>
            }
        ]
    }    
]);

export default router;