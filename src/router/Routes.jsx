import { createBrowserRouter } from "react-router";
import Root from "../Root/Root";
import Home from "../pages/Home";
import Error from "../pages/Error";
import Services from "../pages/Services";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <Error/>,
    children: [{
        path: '/',
        element: <Home/>
    },
    {
        path: '/services',
        element:<Services/>
    }

],
  },
]);

export default router;
