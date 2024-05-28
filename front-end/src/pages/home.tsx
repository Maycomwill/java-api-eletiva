import { useNavigate } from "react-router-dom";

function Home() {
  const navigation = useNavigate()
  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center bg-slate-900 text-slate-50">
      <div className="flex items-center justify-center space-x-12">
        <button onClick={()=>{navigation("/pokemon")}} className="min-w-24 rounded-md py-2 outline-none focus-visible:ring-2 ring-lime-400 bg-slate-700">
          Pokemon
        </button>
        <button onClick={()=>{navigation("/nasa")}} className="min-w-24 rounded-md py-2 outline-none focus-visible:ring-2 ring-lime-400 bg-slate-700">
          Nasa
        </button>
      </div>
    </div>
  );
}

export default Home;
