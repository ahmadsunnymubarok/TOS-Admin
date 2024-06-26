import Card from "../ui/dashboard/card";
import Chart from "../ui/dashboard/chart";

import Transaction from "../ui/dashboard/transaction/transaction";

const Dashboard = () => {
  return (
    <div className="mt-5">
      <div className=" gap-5 flex-col">
        <div className=" grid grid-cols-1  sm:grid-cols-2 md:grid-cols-4 gap-5">
          <Card title="Saldo" value={1234} icon="saldo" />
          <Card title="Total order" value={1235} icon="totalorder" />
          <Card
            title="Total berat sampah"
            value={1245}
            icon="totalberatsampah"
          />
          <Card title="Total day order" value={3234} icon="totaldayorder" />
        </div>
        <Chart />
        <Transaction />
      </div>
    </div>
  );
};

export default Dashboard;
