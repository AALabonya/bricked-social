import { createBrowserRouter } from "react-router-dom"
import Layout from "../MainLayout/Layout"
import Home from "../pages/Home/Home"
import SignUp from "../pages/SignUp"
import SignIn from "../pages/SignIn"
import UserProfile from "../pages/UserProfile/UserProfile"
import SpongebobHouse from "../pages/SpongebobHouse/SpongebobHouse"


const Router = createBrowserRouter([
    {
        path:"/",
        element:<Layout/>,
        children:[
           {
            path:"/",
            element:<Home/>
           },
           
        ]
    },
    {
        path:"/signUp",
        element:<SignUp/>
       },
       {
        path:"/signIn",
        element:<SignIn/>
       },
       {
        path:"/userProfile",
        element:<UserProfile/>
       },
       {
        path:"/SpongebobHouse",
        element:<SpongebobHouse/>
       }
])

export default Router