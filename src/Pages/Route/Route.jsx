import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../../Layout/Main";
import Home from "../Home/Home/Home";
import Menu from "../Menu/Menu/Menu";
import Order from "../Order/Order/Order";
import Login from "../Login/Login";
import SignUp from "../SignUp/SignUp";



  export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
            path: '/',
            element: <Home></Home>
        },
        {
          path: '/menu',
          element: <Menu></Menu>
        },
        {
          path: '/order/:category',
          element: <Order></Order>
        },
        {
          path: '/login',
          element: <Login></Login>
        },
        {
          path: '/signUp',
          element: <SignUp></SignUp>
        }
      ]
    },
  ]);  


