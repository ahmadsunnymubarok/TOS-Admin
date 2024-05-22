import Search from "@/app/ui/dashboard/search";

const History = () => {
  return (
    <div className=" mt-5 rounded-md p-5 bg-[#182237]">
      <div className="w-64">
        <Search placeholder={`seearch for history`} />
      </div>
      <table>
        <thead>
          <tr>
            <td>Id</td>
            <td> </td>
          </tr>
        </thead>
      </table>
    </div>
  );
};

export default History;
