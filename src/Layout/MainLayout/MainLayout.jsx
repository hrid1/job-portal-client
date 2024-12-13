import { Outlet } from "react-router-dom";
import Navbar from "../../components/shared/Navbar";
import Footer from "../../components/shared/Footer";

const MainLayout = () => {
  return (
    <div className="">
      <Navbar />
      <div className="max-w-7xl mx-auto min-h-[calc(100vh-420px)]">
        <Outlet></Outlet>
      </div>
      <Footer/>
    </div>
  );
};

export default MainLayout;
