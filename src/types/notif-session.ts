export interface NotifSession {
  id: string;
  subject: string; // ex: "React", "Estruturas de Dados"
  date: string; // ISO yyyy-mm-dd
  notes?: string; // opcional
}