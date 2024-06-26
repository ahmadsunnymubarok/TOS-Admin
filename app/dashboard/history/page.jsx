import Link from "next/link";
import Search from "@/app/ui/dashboard/search";
import Image from "next/image";
import styles from "@/app/ui/dashboard/history/history.module.css";
import Paginations from "@/app/ui/dashboard/paginations/paginations";

const History = () => {
  return (
    <div className=" mt-5 rounded-md p-5 bg-[#182237]">
      <div className="flex justify-between items-center">
        <Search placeholder={`seearch for a user..`} />
        <Link href="/dashboard/history/add">
          <button className="p-2.5 bg-[#5d57c9] text-white border-none rounded-sm">
            add user
          </button>
        </Link>
      </div>
      <table className={`${styles.table}  w-full`}>
        <thead>
          <tr>
            <td>Name</td>
            <td> Email</td>
            <td> Created at</td>
            <td> Role</td>
            <td> Status</td>
            <td> Action</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <div className=" flex items-center gap-2.5">
                <Image
                  src="/noavatar.png"
                  alt="avatar"
                  width={40}
                  height={40}
                  className=" rounded-lg object-cover"
                />
                ahmad sunny
              </div>
            </td>
            <td>ahmad@gmail.com</td>
            <td>12.12.2024</td>
            <td> admin</td>
            <td> active</td>
            <td>
              <div className={` ${styles.buttons} gap-2.5 flex`}>
                <Link href="/dashboard/history/add/id">
                  <button className="bg-green-900"> view </button>
                </Link>
                <button className="bg-red-900">delete </button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>

      <Paginations />
    </div>
  );
};

export default History;
