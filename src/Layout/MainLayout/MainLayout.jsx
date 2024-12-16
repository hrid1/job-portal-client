import { Outlet, ScrollRestoration } from "react-router-dom";
import Navbar from "../../components/shared/Navbar";
import Footer from "../../components/shared/Footer";

const MainLayout = () => {
  return (
    <div className="">
      <Navbar />
      <div className="container mx-auto min-h-[calc(100vh-420px)]">
        <Outlet></Outlet>
        <ScrollRestoration />
      </div>
      <Footer/>
    </div>
  );
};

export default MainLayout;
