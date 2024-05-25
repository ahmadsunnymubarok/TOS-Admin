const Login = () => {
  return (
    <div className="w-full min-h-screen flex items-center justify-center p-5">
      <form className="  rounded-md bg-[#182237] h-[500px] w-[500px] p-[50px] flex-col justify-center flex gap-10">
        <h1 className="text-center font-bold  text-2xl">Login</h1>
        <input
          type="text"
          placeholder="user name"
          className="p-10   border-solid bg-[#151c2c] border-2 border-[#2e374a] rounded"
        />
        <input
          type="password"
          placeholder="password"
          className="p-10   border-solid bg-[#151c2c] border-2 border-[#2e374a] rounded"
        />
        <button className=" rounded p-5 bg-[#008080]"> Login</button>
      </form>
    </div>
  );
};

export default Login;
