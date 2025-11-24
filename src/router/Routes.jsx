import { createBrowserRouter } from "react-router";
import Root from "../Root/Root";
import Home from "../pages/Home";
import Error from "../pages/Error";
import Services from "../pages/Services";
import Login from "../pages/Login";
import Register from "../pages/Register";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/services",
        element: <Services />,
      },
      {
        path: "/login",
        element: <Login/>
      },
      {
        path: "/login",
        element: <Login/>
      },
      {
        path: "/signup",
        element: <Register/>
      },
    ],
  },
]);

export default router;
