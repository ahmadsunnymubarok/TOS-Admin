"use client";
import { FaSearch, FaBell, FaBars, FaPlus } from "react-icons/fa";
import Image from "next/image";
import avatar from "@/public/noavatar.png";
import { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Sidebar from "./sidebar";

const links = [
  { name: "Setting", href: "/dashboard/setting" },
  { name: "Profile", href: "/dashboard/profile" },
  { name: "Help", href: "/dashboard/helpcenter" },
  { name: "LogOut", href: "/" },
];

const NavBar = () => {
  const [search, setSearch] = useState(false);
  const [sidebar, setSidebar] = useState(false);

  const pathname = usePathname();
  return (
    <>
      <div className="flex  justify-between items-center  rounded-lg bg-[#182237] p-2.5">
        <div className=" flex gap-3 items-center font-bold text-[#b7bac1] capitalize">
          <button
            className="flex sm:hidden"
            onClick={() => setSidebar((sidebar) => !sidebar)}
          >
            <FaBars />
          </button>
          {pathname.split("/").pop()}
        </div>
        <div className="flex  gap-2.5 items-center ">
          <div className=" hidden md:flex  gap-2.5 items-center rounded-lg  p-2.5 bg-[#2e374a] ">
            <FaSearch className="w-5" />
            <input
              type="text"
              placeholder=" Searchhere...."
              className={` bg-transparent  border-none text-white`}
            />
          </div>
          <div className="flex gap-5">
            <button
              className="block md:hidden"
              onClick={() => setSearch((search) => !search)}
            >
              <FaSearch className="w-5" />
            </button>
            <div className="relative">{search && <Search />}</div>
            <button>
              <FaBell className="w-5" />
            </button>
            <div className="relative">
              <User />
            </div>
          </div>
        </div>
      </div>
      <div
        className={` ${
          sidebar ? "left-0" : "left-[-100%]"
        } fixed bg-[#182237] p-5 min-h-screen  top-0  z-1 w-auto `}
      >
        <button onClick={() => setSidebar((sidebar) => !sidebar)}>
          <FaPlus className="rotate-45  m-5 absolute inset-y-0 right-0 " />
        </button>
        <Sidebar />
      </div>
    </>
  );
};

const Search = () => {
  return (
    <div className=" mt-10 right-0 absolute  visible md:invisible rounded-lg  p-2 bg-[#2e374a]   origin-top-right ">
      <input
        type="text"
        placeholder=" Searchhere...."
        className={` w-40 bg-transparent  border-none text-white`}
      />
    </div>
  );
};

const User = () => {
  const [show, setShow] = useState(false);
  return (
    <>
      <div className="flex gap-5 items-center relative">
        <span className="font-medium"> Sunny Mub</span>
        <button onClick={() => setShow((show) => !show)}>
          <Image
            src={avatar}
            width={30}
            height={30}
            className=" rounded-[50%] object-cover bg-white"
          />
        </button>
      </div>
      <div
        show={show}
        className={` ${
          show ? `visible` : `invisible`
        } absolute w-56  mt-[1.2rem] right-0 rounded-md p-5 bg-[#182237] origin-top-right`}
      >
        <div className="flex flex-col gap-2">
          {links.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className=" border-b hover:bg-[#2e374a]"
            >
              {item.name}
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default NavBar;
