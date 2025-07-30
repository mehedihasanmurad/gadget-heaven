import { createBrowserRouter } from "react-router";
import MainLayout from "../Layout/MainLayout";
import Statistic from "../pages/Statistic";
import Dashboard from "../pages/Dashboard";
import Home from "../pages/Home";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout></MainLayout>,
        children: [
            {
                index: true,
                element: <Home></Home>,
            },
            {
                path: "/statistic",
                element: <Statistic></Statistic>,
            },
            {
                path: "/dashboard",
                element: <Dashboard></Dashboard>,
            }
        ],
    },
])