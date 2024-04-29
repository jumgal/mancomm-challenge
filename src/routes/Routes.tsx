import { createBrowserRouter, Navigate } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import AppLayout from "../ui/AppLayout";
import OverviewPage from "../pages/OverviewPage";
import ReportsPage from "../pages/ReportsPage";

const router = createBrowserRouter([
  {
    element: <AppLayout />,

    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/overview",
        element: <OverviewPage />,
      },
      {
        path: "/reports",
        element: <ReportsPage />,
      },
    ],
  },
]);

export default router;
