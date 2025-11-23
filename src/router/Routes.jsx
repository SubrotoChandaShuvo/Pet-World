import { createBrowserRouter } from "react-router";
import Root from "../Root/Root";
import Home from "../pages/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [{
        path: '/',
        element: <Home/>
    }],
  },
]);

export default router;
