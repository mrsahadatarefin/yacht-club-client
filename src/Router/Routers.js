import Home from "../Pages/Home/Home";
import ServiceDetails from "../Pages/ServiceDetails/ServiceDetails";
import YachtServices from "../Pages/YachtServices/YachtServices";


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
        loader:({params}) => fetch(`http://localhost:5000/service/${params.id}`),
         element:<ServiceDetails></ServiceDetails>
    },
  
  
  
  ],
  },
]);
