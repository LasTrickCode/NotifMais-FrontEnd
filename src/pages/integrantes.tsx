import { Link } from "react-router-dom";

export function Integrantes() {
  return (
    <div className="flex flex-col w-full h-[80vh] items-center text-center justify-center gap-16">
      <h1 className="text-5xl title font-bold">Integrantes</h1>
      <h2 className='text-2xl title font-bold '>1TDSPV</h2>
      <div className="flex w-full justify-center gap-5">
        <div className="cards-integrantes">
          <h2>Richard Emiliano</h2>
          <p>RM: 562245</p>
          <div className="flex items-center gap-2">
            <Link to="https://github.com/RichardXIII" target="_blank">
              <button className="button rounded-lg shadow-2xl h-16 w-[200px] transition-transform duration-200 hover:scale-105">
                Github
              </button>
            </Link>
            <Link to="https://github.com/LasTrickCode/NotifMais/tree/main" target="_blank">
              <button className="button rounded-lg shadow-2xl h-16 w-[200px] transition-transform duration-200 hover:scale-105">
                Repositório
              </button>
            </Link>
          </div>
        </div>
        <div className="cards-integrantes">
          <h2>Daniel Almeida</h2>
          <p>RM: 563045</p>
          <Link to="https://github.com/dnl-alm" target="_blank">
            <button className="button rounded-lg shadow-2xl h-16 w-[200px] transition-transform duration-200 hover:scale-105">
              Github
            </button>
          </Link>
        </div>
        <div className="cards-integrantes">
          <h2>Pedro Almeida</h2>
          <p>RM: 563466</p>
          <Link to="https://github.com/PedroF1205" target="_blank">
            <button className="button rounded-lg shadow-2xl h-16 w-[200px] transition-transform duration-200 hover:scale-105">
              Github
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
