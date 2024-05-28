import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

interface NasaDataSchema {
  explanation: string;
  date: string;
  copyright: string;
  hdurl: string;
  media_type: string;
  service_version: string;
  title: string;
  url: string;
}

function Nasa() {
  const [nasaData, setNasaData] = useState<NasaDataSchema>();
  async function getNasaPicture() {
    const { data } = await axios.get("/api/nasa");
    setNasaData(data);
  }
  const navigate = useNavigate();
  useEffect(() => {
    getNasaPicture();
  }, []);
  if (!nasaData) {
    return (
      <div className="bg-slate-900 text-white w-full h-screen flex items-center justify-center">
        <p className="text-4xl font-bold animate-pulse">Loading ...</p>
      </div>
    );
  }
  return (
    <div className="bg-slate-900 flex items-center justify-center flex-col min-h-screen text-slate-50">
      <h1 className="text-2xl font-bold">API: Nasa</h1>
      <div className="w-full flex-col px-24 py-4 space-y-2 flex items-center justify-center">
        {nasaData.hdurl ? (
          <>
            <span>{nasaData.title}</span>
            <img
              src={nasaData.hdurl}
              alt="Nasa Picture"
              className="w-[40rem]"
            />
          </>
        ) : (
          <>
            <span>{nasaData.title}</span>
            <iframe
              width={820}
              height={500}
              src={`${nasaData.url}&loop=1&autoplay=1&mute=1&controls=0`}
            />
          </>
        )}
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
