import { createBrowserRouter, Navigate } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import AppLayout from "../ui/AppLayout";
import OverviewPage from "../pages/OverviewPage";
import ReportsPage from "../pages/ReportsPage";
import BookingPage from "../pages/BookingPage";
import AmentiesPage from "../pages/AmentiesPage";
import CustomizationPage from "../pages/CustomizationPage";
import LocalityPage from "../pages/LocalityPage";

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
      {
        path: "/booking",
        element: <BookingPage />,
      },
      {
        path: "/amenties",
        element: <AmentiesPage />,
      },
      {
        path: "/customization",
        element: <CustomizationPage />,
      },
      {
        path: "/locality",
        element: <LocalityPage />,
      },
      {
        path: "*",
        element: <Navigate to="/" />,
      },
    ],
  },
]);

export default router;
