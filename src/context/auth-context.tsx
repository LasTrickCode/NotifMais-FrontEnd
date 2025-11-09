import React, { createContext, useState, useEffect, useContext } from "react";
import type { AuthUser } from "../types/auth-user";

interface AuthContextProps {
  user: AuthUser | null;
  login: (paciente: AuthUser) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextProps | undefined>(undefined);

interface AuthProviderProps {
  children: React.ReactNode;
}

export function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<AuthUser | null>(null);

  useEffect(() => {
    const stored = localStorage.getItem("user");
    if (stored) setUser(JSON.parse(stored));
  }, []);

  function login(paciente: AuthUser) {
    setUser(paciente);
    localStorage.setItem("user", JSON.stringify(paciente));
    // também salvar pacienteId se quiser
    localStorage.setItem("pacienteId", String(paciente.id));
  }

  function logout() {
    setUser(null);
    localStorage.removeItem("user");
    localStorage.removeItem("pacienteId");
  }

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

// Hook de uso — garante tipagem correta ao consumir o contexto
export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}
