import Image from "next/image";
import avatar from "@/public/noavatar.png";

const Transaction = () => {
  return (
    <div className="bg-[#182237] p-5 rounded-md">
      <h2 className="mb-5 font-extralight text-2xl text-[b7bac1]">
        Lates Transaction
      </h2>

      <table className="w-full ">
        <thead>
          <tr>
            <td>Name</td>
            <td>Status</td>
            <td>Date</td>
            <td>Amount</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <div className="flex gap-2.5 items-center">
                <Image src={avatar} alt="" width={40} height={40} />
                Sunny Mubarok
              </div>
            </td>
            <td>
              <span className="rounded-md text-white p-1.5 text-sm bg-yellow-500">
                Pending
              </span>
            </td>
            <td>14.02.2024</td>
            <td> 5kg</td>
          </tr>
          <tr>
            <td>
              <div className="flex gap-2.5 items-center">
                <Image src={avatar} alt="avatar" width={40} height={40} />
                Sunny Mubarok
              </div>
            </td>
            <td>
              <span className="rounded-md text-white p-1.5 text-sm bg-red-500">
                Cancel
              </span>
            </td>
            <td>14.02.2024</td>
            <td> 5kg</td>
          </tr>
          <tr>
            <td>
              <div className="flex gap-2.5 items-center">
                <Image
                  src={avatar}
                  alt=""
                  width={40}
                  height={40}
                  className="rounded-full  object-cover"
                />
                Sunny Mubarok
              </div>
            </td>
            <td>
              <span className="rounded-md text-white p-1.5 text-sm bg-green-500 ">
                Done
              </span>
            </td>
            <td>14.02.2024</td>
            <td> 5kg</td>
          </tr>
          <tr>
            <td>
              <div className="flex gap-2.5 items-center ">
                <Image src={avatar} alt="" width={40} height={40} />
                Sunny Mubarok
              </div>
            </td>
            <td>
              <span className="bg-yellow-500 rounded-md text-white p-1.5 text-sm">
                Pending
              </span>
            </td>
            <td>14.02.2024</td>
            <td> 5kg</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Transaction;
