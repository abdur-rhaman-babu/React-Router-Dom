import { Outlet } from "react-router-dom";
import Navbar from "../Header/Navbar";
import Footer from "../Footer/Footer";


const MainLayout = () => {
    return (
        <div>
            <Navbar/>
            <div className="outlet-design">
            <Outlet/>
            </div>
            <Footer/>
        </div>
    );
};

export default MainLayout;