import Link from "next/link";
const Home = () => {
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <div className="bg-white text-black">
        <p>Soon.......................</p>
        <Link key={"i"} href="/dashboard" className="bg-yellow-500">
          <button>go to dashboard</button>
        </Link>
      </div>
    </main>
  );
};

export default Home;
