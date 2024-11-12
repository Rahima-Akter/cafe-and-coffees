import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client';
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
    loader: () => fetch('../public/coffees.json'),
    children: [
      {
        path: "/",
        element: <Home></Home>,
        children: [
          {
            path: "/",
            element: <Espresso></Espresso>,
          },
          {
            path: "/milkcoffee",
            element: <MilkCoffee></MilkCoffee>,
          },
          {
            path: "/coldbrew",
            element: <ColdBrew></ColdBrew>,
          },
        ]
      },
      {
        path: "/coffees",
        element: <Coffees></Coffees>,
      },
      {
        path: "/:id",
        element: <CoffeeDetail></CoffeeDetail>,
      },
      {
        path: "/dashboard",
        element: <Dashboard></Dashboard>
      },
    ]
  },
], {
  future: {
    v7_startTransition: true,
    v7_skipActionErrorRevalidation: true,
    v7_fetcherPersist: true,
    v7_normalizeFormMethod: true,
    v7_partialHydration: true,
    v7_relativeSplatPath: true,
  },
});

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} future={{ v7_startTransition: true, }} />
    <ToastContainer />
  </StrictMode>,
)
