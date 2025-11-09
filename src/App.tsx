import { Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";

import { Fallback } from "./components/fallback";
import { Loading } from "./components/loading";
import { Layout } from "./components/layout";
import { NotFound } from "./pages/not-found";
import { Integrantes } from "./pages/integrantes";
import { FAQ } from "./pages/faq";
import { Home } from "./pages/home";
import { Contato } from "./pages/contato";
import { Sobre } from "./pages/sobre";
import { Login } from "./pages/login";

import { useAuth, AuthProvider } from "./context/auth-context";

// Protege rotas que exigem login
interface PrivateRouteProps {
  children: React.ReactNode;
}

function PrivateRoute({ children }: PrivateRouteProps) {
  const { user } = useAuth();
  return user ? children : <Navigate to="/login" replace />;
}

// App principal com contexto e rotas
function App() {
  return (
   
  );
}

export default App;
