import Link from "next/link";
import Paginations from "@/app/ui/dashboard/paginations/paginations";
import Search from "@/app/ui/dashboard/search";
import Image from "next/image";
import styles from "@/app/ui/dashboard/history/history.module.css";

const Products = () => {
  return (
    <div className=" mt-5 rounded-md p-5 bg-[#182237]">
      <div className="flex justify-between items-center">
        <Search placeholder={`seearch for a products..`} />
        <Link href="/dashboard/products/add">
          <button className="p-2.5 bg-[#5d57c9] text-white border-none rounded-sm">
            add products
          </button>
        </Link>
      </div>
      <table className={`${styles.table}  w-full`}>
        <thead>
          <tr>
            <td>Tite</td>
            <td>Description</td>
            <td>Price</td>
            <td> Created at</td>
            <td>Stock</td>
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
                Vending Machine
              </div>
            </td>
            <td>Lorem, ipsum dolor sit amet consectetur</td>
            <td>Rp. 25.000</td>
            <td>24-01-2024</td>
            <td> 24/pcs</td>
            <td> available</td>
            <td>
              <div className={` ${styles.buttons} gap-2.5 flex`}>
                <Link href="/">
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

export default Products;
