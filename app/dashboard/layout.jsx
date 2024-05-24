import Footer from "../ui/dashboard/footer";
import NavBar from "../ui/dashboard/navbar";
import Sidebar from "../ui/dashboard/sidebar";

const Layout = ({ children }) => {
  return (
    <div className="flex">
      <div className="flex-[1]  bg-[#182237] p-5 min-h-screen ">
        <Sidebar />
      </div>

      <div className="flex-[4] p-5 ">
        <NavBar />
        {children}
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
