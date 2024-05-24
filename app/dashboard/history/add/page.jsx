const Add = () => {
  return (
    <div className="p-5 rounded-lg mt-5 bg-[#182237] ">
      <form action="" className="flex flex-wrap justify-between">
        <input
          type="text"
          placeholder="title"
          name="title"
          required
          className="p-8 mb-8 w-[45%] bg-transparent border-2-solid border-[#2e374a] border  rounded"
        />
        <select
          name="category"
          id="category"
          className="p-8 mb-8 bg-transparent border-2-solid border-[#2e374a] border w-[45%]  rounded "
        >
          <option value="general"> Choose a category</option>
          <option value="machine">Machine</option>
          <option value="rent"> Rent</option>
          <option value="buy">Buy</option>
        </select>
        <input
          type="number"
          name="price"
          id="price"
          placeholder="Price"
          required
          className="p-8 mb-8 w-[45%] bg-transparent border-2-solid border-[#2e374a] border  rounded"
        />
        <input
          type="number"
          name="stock"
          id="stock"
          placeholder="Stock"
          required
          className="p-8 mb-8 w-[45%] bg-transparent border-2-solid border-[#2e374a] border  rounded"
        />
        <input
          type="text"
          name="color"
          id="color"
          placeholder="Color"
          required
          className="p-8 mb-8 w-[45%] bg-transparent border-2-solid border-[#2e374a] border  rounded"
        />
        <input
          type="text"
          name="size"
          id="size"
          placeholder="Size"
          required
          className="p-8 mb-8 w-[45%] bg-transparent border-2-solid border-[#2e374a] border rounded "
        />
        <textarea
          name="desc"
          id="desc"
          rows={16}
          placeholder="descriptions"
          className="p-8 mb-8 bg-transparent border-2-solid border-[#2e374a] border w-full rounded "
        ></textarea>
        <button type="submit" className="w-full bg-[#008080] rounded p-7">
          submit
        </button>
      </form>
    </div>
  );
};

export default Add;
