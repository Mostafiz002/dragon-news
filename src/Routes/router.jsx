import { createBrowserRouter } from "react-router";
import HomeLayouts from "../Layouts/HomeLayouts";
import Home from "../Pages/Home";
import CategoryNews from "../Pages/CategoryNews";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayouts />,
    children: [
      { index: true, Component: Home },
      {
        path: "/category/:id",
        element: <CategoryNews />,
        loader:()=> fetch("../news.json"),
      },
    ],
  },
  {
    path: "/auth",
    element: <h2>authentication layout</h2>,
  },
  {
    path: "/news",
    element: <h2>news layout</h2>,
  },
  {
    path: "/*",
    element: <h2>404 error</h2>,
  },
]);

export default router;
