import {
  FaHome,
  FaBalanceScale,
  FaHistory,
  FaClone,
  FaSlidersH,
  FaMinusSquare,
  FaSignOutAlt,
  FaBoxes,
} from "react-icons/fa";
import Menulink from "./menulinks";
import Image from "next/image";
import avatar from "@/public/noavatar.png";
import logo from "@/public/logo.png";
const menuitem = [
  {
    title: "Pages",
    list: [
      {
        title: "Dashboard",
        href: "/dashboard",
        icon: <FaHome />,
      },
      {
        title: "Balance",
        href: "/dashboard/balance",
        icon: <FaBalanceScale />,
      },
      {
        title: "History",
        href: "/dashboard/history",
        icon: <FaHistory />,
      },
      {
        title: "Products",
        href: "/dashboard/products",
        icon: <FaBoxes />,
      },
      {
        title: "Report",
        href: "/dashboard/report",
        icon: <FaClone />,
      },
    ],
  },

  {
    title: "User",
    list: [
      {
        title: "Profile",
        href: "/dashboard/profile",
        icon: <FaSlidersH />,
      },
      {
        title: "Setting",
        href: "/dashboard/setting",
        icon: <FaSlidersH />,
      },
      {
        title: "Help center",
        href: "/dashboard/helpcenter",
        icon: <FaMinusSquare />,
      },
    ],
  },
];

const Sidebar = () => {
  return (
    <div className=" sticky top-10">
      <div className="flex flex-col items-center mb-5  ">
        <Image src={logo} width={150} height={75} alt="avatar" />
        <span className="text-center">TOS INDONESIA</span>
      </div>
      <div className="flex items-center gap-5 mb-5 ">
        <Image
          src={avatar}
          alt="avatar"
          width={50}
          height={50}
          className=" rounded-[50%] object-cover bg-white"
        />
        <div className="flex flex-col invisible md:visible">
          <span className="font-medium"> Sunny Mub</span>
          <span className="text-xs  text-[#b7bac1]"> Administrator</span>
        </div>
      </div>
      <ul>
        {menuitem.map((kat) => (
          <li key={kat.title}>
            <span className="my-2.5 text-[#b7bac1] font-bold text-xs ">
              {kat.title}
            </span>
            {kat.list.map((item) => (
              <Menulink item={item} key={item.title} />
            ))}
          </li>
        ))}
      </ul>
      <button className="p-5 block  md:flex gap-2.5 items-center rounded-md my-1 hover:bg-[#2e374a]  w-full ">
        <FaSignOutAlt className="w-5" />
        <span className=" invisible md:visible">LogOut</span>
      </button>
    </div>
  );
};

export default Sidebar;
