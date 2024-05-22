import {
  FaMoneyBillWave,
  FaTrashAlt,
  FaBoxOpen,
  FaShoppingCart,
} from "react-icons/fa";

const iconMap = {
  saldo: FaMoneyBillWave,
  totalorder: FaBoxOpen,
  totalberatsampah: FaTrashAlt,
  totaldayorder: FaShoppingCart,
};

const Card = ({ title, value, icon }) => {
  const Myicon = iconMap[icon];
  return (
    <div className="bg-[#182237] rounded-md flex p-5 gap-5 cursor-pointer w-full hover:bg-[#2e374a] ">
      {Myicon ? <Myicon className="w-6" /> : null}
      <div className="flex flex-col gap-5">
        <span> {title}</span>
        <span className="font-bold   text-2xl">{value}</span>
        <span className="text-sm font-light">
          <span className="text-lime-400">12%</span> lebih dari minggu lalu
        </span>
      </div>
    </div>
  );
};

export default Card;
