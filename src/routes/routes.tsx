import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Login from "../pages/login/Login";
import Home from "../pages/home/Home";
import AllProduct from "../pages/products/AllProduct";
import ProductDetails from "../pages/products/ProductDetails";
import AdminProtectedRoute from "./AdminProtectedRoute";
import AdminDashboard from "../pages/admin/AdminDashboard";
import CreateProduct from "../pages/products/CreateProduct";
import { routeGenerator } from "../utils/routesGenerator";
import { adminPaths } from "./admin.routes";
import { userPaths } from "./user.routes";
import VerifyOrder from "../pages/order/VerifyOrder";
import AllOrder from "../pages/order/AllOrder";
import Register from "../pages/register/Register";

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                // name: "Home",
                path: "/",
                element: <Home />,
            },
            {
                // name: "All Product",
                path: "all-product",
                element: <AllProduct />,
            },
            {
                path: "all-product/:productId",
                element: <ProductDetails />,
            },
            {
                path: 'order-verify',
                element: <VerifyOrder />
            },
            {
                path: 'orders',
                element: <AllOrder />
            },
            // Admin Routs
            // {
            //     // name: "Dashboard",
            //     path: "dashboard",
            //     element: <AdminProtectedRoute><AdminDashboard /></AdminProtectedRoute>,
                    
            // },
            {
                // name: "Create Product",
                path: "create-product",
                element: <AdminProtectedRoute><CreateProduct /></AdminProtectedRoute>,
            },
            
        ]
    },
    {
        path: '/admin',
        element: <App />,
        children: routeGenerator(adminPaths),
    },
    {
        path: '/store',
        element: <App />,
        children: routeGenerator(userPaths),
    },
    { path: 'login', element: <Login /> },
    { path: 'register', element: <Register /> },
    {
        // name: "Dashboard",
        path: "dashboard",
        element: <AdminProtectedRoute><AdminDashboard /></AdminProtectedRoute>,
            
    },
])

export default router;