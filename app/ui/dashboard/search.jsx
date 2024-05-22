import { FaSearch } from "react-icons/fa";

const Search = ({ placeholder }) => {
  return (
    <div className="flex  gap-2.5 items-center rounded-lg  p-2.5 bg-[#2e374a]">
      <FaSearch />
      <input
        type="text"
        placeholder={placeholder}
        className="bg-transparent  border-none text-white outline-none"
      />
    </div>
  );
};

export default Search;
