import { createBrowserRouter } from "react-router";
import Root from "../Root/Root";
import Home from "../pages/Home";
import Error from "../pages/Error";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <Error/>,
    children: [{
        path: '/',
        element: <Home/>
    }],
  },
]);

export default router;
