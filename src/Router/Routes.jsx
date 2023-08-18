import { RouterProvider, createBrowserRouter } from "react-router-dom";
import ComplexCounter from "../components/ComplexCounter";
import SimpleCounter from "../components/SimpleCounter";
import Main from "../layout/Main";
import AdvancedCounter from "../components/AdvancedCounter";
import GlobalCounter from "../components/GlobalCounter";

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
        {
          path: "/advanced",
          element: <AdvancedCounter />,
        },
        {
          path: "/global",
          element: <GlobalCounter />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
};

export default Routes;
