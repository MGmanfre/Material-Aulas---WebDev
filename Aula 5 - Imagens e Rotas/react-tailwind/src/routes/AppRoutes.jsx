import { createBrowserRouter } from "react-router-dom";
import AdminLayout from "../pages/AdminLayout";
import Usuarios from "../pages/Usuarios";
import PageNotFound from "../pages/PageNotFound";
import Dashboard from "../pages/Dashboard";

export const  router = createBrowserRouter([
    {
        path: "/",
        element: <AdminLayout/>,
        errorElement: <PageNotFound/>,
        children: [
            {
                index: true,
                element: <Dashboard/>
            },
            {
                path: "/usuarios",
                element: <Usuarios/>
            }
        ]
    }

]);