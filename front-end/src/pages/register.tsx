import { FormEvent, useState } from "react";
import { useAuth } from "../hooks/useAuth";

function Register() {
  const { register } = useAuth();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  function handleSubmit(e: FormEvent) {
    e.preventDefault();

    const data = {
      email,
      name,
    };
    register(data);
  }
  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center bg-slate-900 text-slate-50">
      <h1 className="mb-12">Cadastro</h1>
      <div className="w-full flex flex-col items-center justify-center space-y-2">
        <form
          onSubmit={handleSubmit}
          className="flex w-full items-center justify-center flex-col space-y-6"
        >
          <div className="flex w-1/4 flex-col space-y-2 items-start justify-center">
            <label htmlFor="name">Digite seu nome:</label>
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-4 py-2 rounded-md bg-slate-800 text-slate-200 placeholder:text-slate-400 outline-none focus-visible:ring-2 duration-200 transition-all ease-in-out ring-lime-500 selection:bg-white selection:text-slate-900"
              type="text"
              id="name"
              placeholder="John Doe"
            />
          </div>
          <div className="flex w-1/4 flex-col space-y-2 items-start justify-center">
            <label htmlFor="email">Digite seu e-mail:</label>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="px-4 w-full py-2 rounded-md bg-slate-800 text-slate-200 placeholder:text-slate-400 outline-none focus-visible:ring-2 duration-200 transition-all ease-in-out ring-lime-500 selection:bg-white selection:text-slate-900"
              type="email"
              id="email"
              placeholder="john.doe@example.com"
            />
          </div>
          <div className="flex items-center justify-center">
            <button
              type="submit"
              className="uppercase bg-slate-800 hover:bg-slate-700 duration-200 transition-all ease-in-out px-6 py-2 rounded-md outline-none focus-visible:ring-2 ring-lime-500"
            >
              cadastrar
            </button>
          </div>
        </form>
        <div>
          <a
            href="/"
            className="hover:text-lime-400 transition-all duration-200 ease-in-out"
          >
            Voltar
          </a>
        </div>
      </div>
    </div>
  );
}

export default Register;
