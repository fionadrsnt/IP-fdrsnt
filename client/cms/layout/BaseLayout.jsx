import Navbar from "../src/components/Navbar";

import { Outlet } from "react-router-dom";

const BaseLayout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
};
export default BaseLayout;
