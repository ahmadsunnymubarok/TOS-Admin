import { useAmp } from "next/amp";
import Footer from "../ui/dashboard/footer";
import NavBar from "../ui/dashboard/navbar";
import Sidebar from "../ui/dashboard/sidebar";

const Layout = ({ children }) => {
  return (
    <div className="flex">
      <div className=" fixed sm:static flex-[1]   bg-[#182237] p-5 min-h-screen left-[-100%] md:w-auto w-[6rem]">
        <Sidebar />
      </div>

      <div className=" flex-col   md:flex-[4] p-5 ">
        <NavBar />
        {children}
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
