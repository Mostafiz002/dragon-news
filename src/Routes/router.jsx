import { createBrowserRouter } from "react-router";
import HomeLayouts from "../Layouts/HomeLayouts";
import Home from "../Pages/Home";
import CategoryNews from "../Pages/CategoryNews";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import AuthLayout from "../Layouts/AuthLayout";
import NewsDetails from "../Pages/NewsDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayouts />,
    children: [
      { index: true, Component: Home },
      {
        path: "/category/:id",
        element: <CategoryNews />,
        loader: () => fetch("../news.json"),
      },
    ],
  },
  {
    path: "/auth",
    element: <AuthLayout />,
    children: [
      {
        path: "/auth/login",
        element: <Login />,
      },
      {
        path: "/auth/register",
        element: <Register />,
      },
    ],
  },
  {
    path: "/news-details/:id",
    element: <NewsDetails></NewsDetails>,
    loader: () => fetch("../news.json"),
  },
  {
    path: "/*",
    element: <h2>404 error</h2>,
  },
]);

export default router;
