import { useEffect, useState } from "react";
import { useAuth } from "../context/auth-context";
import { API_NOTIF } from "../api/notif-info";
import type { AuthUser } from "../types/auth-user";
import { useNavigate } from "react-router-dom";

export function Login() {
  const { login } = useAuth();
  const [pacientes, setPacientes] = useState<AuthUser[]>([]);
  const [pacienteSelecionado, setPacienteSelecionado] = useState("");
  const navigate = useNavigate();

  // Busca os pacientes da API no carregamento da página
  useEffect(() => {
    async function carregarPacientes() {
      try {
        const resposta = await fetch(`${API_NOTIF}/pacientes`);
        const data = await resposta.json();
        setPacientes(data);
      } catch (erro) {
        console.error("Erro ao buscar pacientes:", erro);
      }
    }
    carregarPacientes();
  }, []);

  // Ao clicar no botão "Entrar"
  const handleLogin = () => {
    if (!pacienteSelecionado) {
      alert("Selecione um paciente para continuar.");
      return;
    }

    const paciente = pacientes.find((p) => p.id === Number(pacienteSelecionado));
    if (!paciente) {
      alert("Paciente inválido.");
      return;
    }

    // Salva o usuário no contexto e localStorage
    login(paciente);

    // Redireciona para a Home
    navigate("/");
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-6">
      <div className="bg-white shadow-md rounded-2xl p-8 w-full max-w-md">
        <h1 className="text-2xl font-bold mb-6 text-center text-blue-700">
          Selecione seu usuário
        </h1>

        {/* SELECT com nomes da API */}
        <select
          className="border border-gray-300 rounded-xl p-3 mb-4 w-full text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={pacienteSelecionado}
          onChange={(e) => setPacienteSelecionado(e.target.value)}
        >
          <option value="">-- Escolha um paciente --</option>
          {pacientes.map((p) => (
            <option key={p.id} value={p.id}>
              {p.nome} ({p.email})
            </option>
          ))}
        </select>

        {/* BOTÃO */}
        <button
          onClick={handleLogin}
          className="w-full bg-blue-600 text-white py-3 rounded-xl font-semibold hover:bg-blue-700 transition-all"
        >
          Entrar
        </button>
      </div>
    </div>
  );
}
