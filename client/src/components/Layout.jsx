import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
const Layout = () => {
  return (
    <div className=" px-4 md:px-8 lg:px-16 xl:px-64">
      {/* Navbar */}
      <Navbar />
      {/* Page Content */}
      <main className="">
        <Outlet /> {/* Render child routes here */}
      </main>
    </div>
  );
};

export default Layout;
