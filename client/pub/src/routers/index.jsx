import { createBrowserRouter, redirect } from "react-router-dom";
import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";
import BaseLayout from "../layouts/BaseLayouts";
import RegisterPage from "../pages/RegisterPage";
import DetailPage from "../pages/DetailPage";
import PaymentSummaryPage from "../pages/PaymentSummaryPage";
import TrackingOrderPage from "../pages/TrackingOrderPage";
import FaqPage from "../pages/FaqPage";
import UserPage from "../pages/UserPage";

const router = createBrowserRouter([
  {
    element: <LoginPage />,
    path: "/login",
    loader: async () => {
      if (localStorage.token) {
        return redirect("/");
      }
      return null;
    },
  },
  {
    element: <RegisterPage />,
    path: "/register",
    loader: async () => {
      if (localStorage.token) {
        return redirect("/");
      }
      return null;
    },
  },
  {
    element: <BaseLayout />,
    loader: async () => {
      if (!localStorage.token) {
        return redirect("/login");
      }
      return null;
    },
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/adoptme/:id",
        element: <DetailPage />,
      },
      {
        path: "/adoptme/order/:id",
        element: <PaymentSummaryPage />,
      },
      {
        path: "/tracking",
        element: <TrackingOrderPage />,
      },
      {
        path: "/faq",
        element: <FaqPage />,
      },
      {
        path: "/user/:id",
        element: <UserPage />,
      },
    ],
  },
]);

export default router;
