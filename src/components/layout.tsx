import { Link, Outlet, useNavigate } from "react-router-dom";
import { useAuth } from "../context/auth-context";

export function Layout() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <div className="min-h-screen">
      <nav className="bg-white border-t-8 border-t-cyan-50 flex items-center justify-center relative">
        {/* LOGO */}
        <img
          src="src/assets/img/stethoscope.png"
          alt="logo"
          className="w-10 h-10 mb-14 pt-1 pl-1 pb-1 border-gray-500 bg-gray-200 rounded-md"
        />

        {/* TÍTULOS E LINKS */}
        <div className="flex flex-col p-3 w-1/2 border-b border-gray-300 shadow-[0_2px3px-2px_rgba(0,0,0,0.1)] rounded-xs">
          <h1 className="text-black font-bold text-2xl h-1">
            Notificações Médicas
          </h1>

          <h2 className="text-black mt-7">
            Mantenha-se atualizado com suas consultas médicas e cuidados aos pacientes
          </h2>

          <div className="flex justify-center items-center p-4 gap-5">
            <Link
              to="/home"
              className="text-[black] font-bold rounded transition-transform duration-200 hover:scale-105"
            >
              HOME
            </Link>

            <Link
              to="/integrantes"
              className="text-[black] font-bold rounded transition-transform duration-200 hover:scale-105"
            >
              Integrantes
            </Link>

            <Link
              to="/sobre"
              className="text-black font-bold rounded transition-transform duration-200 hover:scale-105"
            >
              Sobre
            </Link>

            <Link
              to="/contato"
              className="text-black font-bold rounded transition-transform duration-200 hover:scale-105"
            >
              Contato
            </Link>

            <Link
              to="/faq"
              className="text-[black] font-bold rounded transition-transform duration-200 hover:scale-105"
            >
              FAQ
            </Link>
          </div>
        </div>

        {/* BOTÃO LOGOUT (canto superior direito) */}
        {user && (
          <button
            onClick={handleLogout}
            className="absolute top-4 right-6 bg-red-500 text-white px-4 py-2 rounded-lg shadow-md font-semibold hover:bg-red-600 transition-all"
          >
            Logout
          </button>
        )}
      </nav>

      <main className="flex flex-col justify-center items-center px-4 w-full">
        <Outlet />
      </main>
    </div>
  );
}
