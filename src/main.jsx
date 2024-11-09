import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Layout from './Layout/Layout';
import Home from './NavLInks/Home';
import Coffees from './NavLInks/Coffees';
import Dashboard from './NavLInks/Dashboard';
import Espresso from './Components/Espresso';
import MilkCoffee from './Components/MilkCoffee';
import ColdBrew from './Components/ColdBrew';
import CoffeeDetail from './Components/CoffeeDetail';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    children:[
      {
        path:"/",
        element: <Home></Home>,
        children: [
          {
            path: "/",
            element: <Espresso></Espresso>,
            loader: () => fetch('../public/coffees.json'),
          },
          {
            path: "/milkcoffee",
            element: <MilkCoffee></MilkCoffee>,
            loader: () => fetch('../public/coffees.json'),
          },
          {
            path: "/coldbrew",
            element: <ColdBrew></ColdBrew>,
            loader: () => fetch('../public/coffees.json'),
          },
        ]
      },
      {
        path:"/coffees",
        element: <Coffees></Coffees>,
        loader: () => fetch('../public/coffees.json'),
      },
      {
        path:"/:id",
        element: <CoffeeDetail></CoffeeDetail>,
        loader: () => fetch('../public/coffees.json'),
      },
      {
        path:"/dashboard",
        element: <Dashboard></Dashboard>
      },
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
     <RouterProvider router={router} />
  </StrictMode>,
)
