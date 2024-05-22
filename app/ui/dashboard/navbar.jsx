"use client";
import { FaSearch, FaBell } from "react-icons/fa";
import Image from "next/image";
import avatar from "@/public/noavatar.png";
import { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

const links = [
  { name: "Setting", href: "/dashboard/setting" },
  { name: "Profile", href: "/dashboard/profile" },
  { name: "Help", href: "/dashboard/helpcenter" },
  { name: "LogOut", href: "/" },
];

const NavBar = () => {
  const [show, setShow] = useState(false);

  const handleToggle = () => {
    setShow(!show);
  };
  const pathname = usePathname();
  return (
    <div className="flex  justify-between items-center  rounded-lg bg-[#182237] p-2.5">
      <div className="font-bold text-[#b7bac1] capitalize">
        {pathname.split("/").pop()}
      </div>
      <div className="flex  gap-2.5 items-center">
        <div className="flex  gap-2.5 items-center rounded-lg  p-2.5 bg-[#2e374a] ">
          <input
            type="text"
            placeholder=" Searchhere...."
            className="bg-transparent  border-none text-white"
          />
        </div>
        <div className="flex gap-5">
          <button>
            <FaBell className="w-5" />
          </button>
          <div className="relative">
            <div className="flex gap-5 items-center relative">
              <span className="font-medium"> Sunny Mub</span>
              <button onClick={handleToggle}>
                <Image
                  src={avatar}
                  width={30}
                  height={30}
                  className=" rounded-[50%] object-cover bg-white"
                />
              </button>
            </div>
            <div
              className={` ${
                show ? `visible` : `invisible`
              } absolute w-56  mt-5 right-0 rounded-md p-5 bg-[#182237] origin-top-right`}
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
          </div>
        </div>
      </div>
    </div>
  );
};

const User = () => {
  return (
    <div className="absolute w-56 z-10 mt-5 right-0 bg-white origin-top-right">
      <div className="flex flex-col">
        <Link href="/"> Settings</Link>
        <Link href="/">Profile</Link>
        <Link href="/">Help</Link>
        <Link href="">LogOut</Link>
      </div>
    </div>
  );
};
export default NavBar;
