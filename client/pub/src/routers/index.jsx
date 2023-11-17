import { createBrowserRouter, redirect } from "react-router-dom";
import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";
import BaseLayout from "../layouts/BaseLayouts";
import RegisterPage from "../pages/RegisterPage";
import DetailPage from "../pages/DetailPage";
import PaymentSummaryPage from "../pages/PaymentSummaryPage";

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
        path: "/adoptme/order",
        element: <PaymentSummaryPage />,
      },
      // {
      //   path: "/adoptme/:id/order",
      //   element: <PaymentSummaryPage />,
      // },
    ],
  },
]);

export default router;
