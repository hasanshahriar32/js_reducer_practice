import { RouterProvider, createBrowserRouter } from "react-router-dom";
import ComplexCounter from "../components/ComplexCounter";
import SimpleCounter from "../components/SimpleCounter";
import Main from "../layout/Main";

const Routes = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main />,
      children: [
        {
          path: "/simple",
          element: <SimpleCounter />,
        },
        {
          path: "/complex",
          element: <ComplexCounter />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
};

export default Routes;
