// src/components/status-confirmacao.tsx
import { useState } from "react";
import { API_NOTIF } from "../api/notif-info";

interface Props {
  consultaId: number;
  onAtualizar?: () => void;
}

export function StatusConfirmacao({ consultaId, onAtualizar }: Props) {
  const [carregando, setCarregando] = useState(false);

  async function atualizarStatus(status: "C" | "D") {
    try {
      setCarregando(true);
      const res = await fetch(`${API_NOTIF}/consultas/${consultaId}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ statusConfirmacao: status }),
      });

      if (!res.ok) throw new Error("Erro ao atualizar status");

      alert(status === "C" ? "Consulta confirmada!" : "Consulta desmarcada!");

      if (onAtualizar) onAtualizar();
    } catch (err) {
      console.error(err);
      alert("Falha ao atualizar o status da consulta.");
    } finally {
      setCarregando(false);
    }
  }

  return (
    <div className="flex gap-2 mt-3">
      <button
        onClick={() => atualizarStatus("C")}
        disabled={carregando}
        className={`px-3 py-1 rounded text-white font-semibold transition ${
          carregando ? "bg-gray-400" : "bg-green-500 hover:bg-green-600"
        }`}
      >
        Confirmar
      </button>
      <button
        onClick={() => atualizarStatus("D")}
        disabled={carregando}
        className={`px-3 py-1 rounded text-white font-semibold transition ${
          carregando ? "bg-gray-400" : "bg-red-500 hover:bg-red-600"
        }`}
      >
        Desmarcar
      </button>
    </div>
  );
}
