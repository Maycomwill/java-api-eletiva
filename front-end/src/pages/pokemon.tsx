import { useEffect, useState } from "react";
import axios, { AxiosError } from "axios";
import { useNavigate } from "react-router-dom";

interface PokemonData {
  name: string;
  weight: number;
  height: number;
}
function Pokemon() {
  const [data, setData] = useState<PokemonData>();
  useEffect(() => {
    function getRandomArbitrary(min: number, max: number) {
      return Math.random() * (max - min) + min;
    }

    const number = getRandomArbitrary(1, 151).toFixed(0);
    getPokemon(number);
  }, []);
  async function getPokemon(ref: string) {
    try {
      const { data } = await axios.get("/api/pokemon", {
        params: {
          ref,
        },
      });
      setData(data);
    } catch (error) {
      if (error instanceof AxiosError) {
        return alert(error.message);
      }
    }
  }
  const navigate = useNavigate();
  return (
    <div className="w-full min-h-screen bg-slate-900 text-slate-50 flex flex-col items-center justify-start pt-40 space-y-24">
      <h1 className="text-2xl font-bold">API: Pokeapi</h1>
      {data ? (
        <>
          <div className="flex flex-col items-center space-y-2 rounded-md border-2 border-lime-400 p-4">
            <span>{data.name.toUpperCase()}</span>
            <span>Peso: {(data.weight * 0.1).toFixed(2)}kg</span>
            <span>Altura: {(data.height * 0.1).toFixed(2)}m</span>
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
        </>
      ) : null}
    </div>
  );
}

export default Pokemon;
