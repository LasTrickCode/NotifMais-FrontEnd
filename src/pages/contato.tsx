import { Link } from "react-router-dom";

export function Contato() {
  return (
    <div className="flex flex-col w-full h-[80vh] items-center text-center justify-center gap-16">
      <h1 className="text-5xl title font-bold">Contato</h1>
      <Link
        to="https://github.com/LasTrickCode"
        target="_blank"
      >
        <button className="button rounded-lg shadow-2xl h-16 w-[200px] transition-transform duration-200 hover:scale-105">
          LasTrickCode
        </button>
      </Link>
    </div>
  );
}
