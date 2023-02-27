import About from "../Pages/AboutUs/About";
import AddService from "../Pages/AddService/AddService";
import Blog from "../Pages/Blog/Blog";
import Contact from "../Pages/Contact/Contact";
import Home from "../Pages/Home/Home";
import Services from "../Pages/Home/Services/Services";
import Login from "../Pages/Login/Login";
import MyReviews from "../Pages/Myreviews/MyReviews";
import ServiceDetails from "../Pages/ServiceDetails/ServiceDetails";
import SignUp from "../Pages/SignUp/SignUp";
import YachtServices from "../Pages/YachtServices/YachtServices";
import PrivateRoute from "./PrivateRoute/PrivateRoute";


const { createBrowserRouter } = require("react-router-dom");
const { default: Main } = require("../Layout/Main");

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      
      
      { path: "/", element: <Home></Home> },
      { path: "/services", element:<YachtServices></YachtServices>  },
      {
        path:'/services/details/:id',
        loader:({params}) => fetch(`https://yacht-club-server.vercel.app/service/${params.id}`),
         element:<ServiceDetails></ServiceDetails>
    },
    {
      path:'/login',
      element:<Login></Login>,

    },
  
    {
      path:'/signup',
      element:<SignUp></SignUp>,

    },
    {
      path:'/addService',
      element:<PrivateRoute><AddService></AddService></PrivateRoute>
    },
    {
path:'/myReviews',
 element:<PrivateRoute><MyReviews></MyReviews> </PrivateRoute>
    },
    
    {
      path:'/contact',
      element:<Contact></Contact>
    },
    {
      path:'/aboutUs',
      element:<About></About>
    },
    {
      path:'/blog',
      element:<Blog></Blog>
    },

    
    
  
  
  
  ],
  },
]);
