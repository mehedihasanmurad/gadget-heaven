import { createBrowserRouter } from "react-router";
import MainLayout from "../Layout/MainLayout";
import Statistic from "../pages/Statistic";
import Dashboard from "../pages/Dashboard";
import Home from "../pages/Home";
import Products from "../pages/Products";
import CommonCategories from "../pages/CommonCategories";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
                children: [
                    {
                        path: "/",
                        element: <Products></Products>,
                        loader: () => fetch("./productData.json"),
                    },
                    {
                        path: "/:category",
                        element: <CommonCategories></CommonCategories>,
                        loader: () => fetch("./productData.json"),
                    },
                ]
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