import { createBrowserRouter, redirect } from "react-router-dom";
import HomePage from "../pages/HomePage";

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
]);

export default router;
