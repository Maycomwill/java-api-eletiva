import { useEffect, useState } from "react";
import api from "../lib/axios";
import { useNavigate } from "react-router-dom";

function Nasa() {
  const [url, setUrl] = useState("");
  async function getNasaPicture() {
    const { data } = await api.get("/nasa");
    setUrl(data);
  }
  const navigate = useNavigate();
  useEffect(() => {
    getNasaPicture();
  }, []);
  return (
    <div className="bg-slate-900 flex items-center flex-col min-h-screen text-slate-50">
      <h1 className="text-2xl font-bold">API: Nasa</h1>
      <div className="w-full flex-col px-24 py-4 space-y-2 flex items-center justify-center">
        <span>Imagem do dia</span>
        <img src={url} alt="Nasa Picture" className="w-[40rem]" />
      </div>
      <div>
        <button
          onClick={() => {
            navigate("/");
          }}
        >
          Home
        </button>
      </div>
    </div>
  );
}

export default Nasa;
