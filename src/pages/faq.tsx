interface FAQProps {}

export function FAQ({}: FAQProps) {
  return (
    <>
      <h2 className="font-bold text-[black] text-2xl mb-6">
        Perguntas Frequentes
      </h2>

      <section aria-label="Perguntas frequentes">
        <article className="bg-white border border-gray-300 rounded-lg shadow-sm p-4 my-4 flex flex-col">
          <h2 className="font-bold">O que é este aplicativo?</h2>
          <p>
            O aplicativo permite que pacientes e profissionais recebam
            notificações importantes sobre consultas, exames, vacinas e alertas
            médicos em tempo real.
          </p>
        </article>
        <article className="bg-white border border-gray-300 rounded-lg shadow-sm p-4 my-4 flex flex-col">
          <h2 className="font-bold">Como recebo notificações?</h2>
          <p>
            As notificações são enviadas automaticamente pelo hospital assim que
            houver atualização em seus registros médicos ou agendamentos{" "}
          </p>
        </article>
        <article className="bg-white border border-gray-300 rounded-lg shadow-sm p-4 my-4 flex flex-col">
          <h2 className="font-bold">
            O aplicativo funciona em todos os dispositivos?
          </h2>
          <p>
            O app é compatível com dispositivos Android e iOS e se adapta a
            diferentes tamanhos de tela.
          </p>
        </article>
      </section>
    </>
  );
}
