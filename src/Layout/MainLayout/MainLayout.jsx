import { Outlet } from "react-router-dom";
import Navbar from "../../components/shared/Navbar";

const MainLayout = () => {
    return (
        <div className="max-w-7xl mx-auto">
            <Navbar/>
           <Outlet></Outlet>
            <h2>Footer</h2>
        </div>
    );
};

export default MainLayout;