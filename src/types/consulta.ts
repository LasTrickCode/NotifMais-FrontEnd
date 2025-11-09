export interface Consulta {
  id: number;
  paciente: {
    id: number;
    nome: string;
    email: string;
  };
  medico: {
    id: number;
    nome: string;
    especialidade: string;
  }
  dataHora: string;
  tipo: string;
  statusConfirmacao: 'C' | 'P' | 'D';
}