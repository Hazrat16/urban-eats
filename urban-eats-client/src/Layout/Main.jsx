import { Outlet } from "react-router-dom";
import Footer from "../pages/Shared/Footer/Footer";
import Navbar from "../pages/Shared/Navbar/Navbar";

const Main = () => {
  const locationUrl = window.location.pathname.includes("/login") || window.location.pathname.includes("/signup");
  console.log(locationUrl);
  return (
    <div>
      {!locationUrl && <Navbar />}
      <Outlet></Outlet>
      {!locationUrl && <Footer />}
    </div>
  );
};

export default Main;
