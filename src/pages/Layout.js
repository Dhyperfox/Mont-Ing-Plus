import { Outlet } from "react-router-dom";
import '../css/global.css';
import Navbar from "../components/navbar/Navbar";


const Layout = () => {

  return (
    <>
    <div className="wrapper">
        <Navbar/>
        <Outlet />
    </div>
    </>
  )
};

export default Layout;