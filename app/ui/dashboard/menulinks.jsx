"use client";

import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Menulink = ({ item }) => {
  const pathname = usePathname();
  return (
    <Link
      href={item.href}
      className={clsx(
        "p-5  align-center gap-5 hover:bg-[#2e374a]  my-2.5  rounded-md  flex ",
        { "bg-[#2e374a]": pathname === item.href }
      )}
    >
      <span>{item.icon}</span>
      <span className=" hidden md:flex">{item.title}</span>
    </Link>
  );
};

export default Menulink;
