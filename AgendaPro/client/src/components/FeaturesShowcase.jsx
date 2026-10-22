import { AgendaMockup, ClientsMockup, ServicesMockup, BookingMockup } from './ModuleMockups'

export const FeaturesShowcase = () => {
  const modules = [
    {
      id: 1,
      tag: "Módulo 01",
      title: "Agenda inteligente",
      description: "Visualização organizada dos horários e atendimentos em grade horária flexível. Controle folgas, intervalos e garanta pontualidade ponta a ponta.",
      feature: "Grade com intervalos automáticos de segurança",
      Component: AgendaMockup
    },
    {
      id: 2,
      tag: "Módulo 02",
      title: "Gestão de clientes",
      description: "Informações centralizadas para facilitar o acompanhamento com tabela limpa, histórico de atendimentos e tags de status de cada cliente.",
      feature: "Acesso instantâneo ao histórico por cliente",
      Component: ClientsMockup
    },
    {
      id: 3,
      tag: "Módulo 03",
      title: "Cadastro de serviços",
      description: "Organização dos seus serviços com especificações claras de preços, duração estipulada e categorias personalizadas.",
      feature: "Precificação transparente e duração pré-definida",
      Component: ServicesMockup
    },
    {
      id: 4,
      tag: "Módulo 04",
      title: "Agendamentos online",
      description: "Uma experiência de reserva digital intuitiva e simplificada para o cliente, reduzindo o tempo gasto no WhatsApp e mensagens manuais.",
      feature: "Redução drástica de ausências e cancelamentos",
      Component: BookingMockup
    }
  ]

  return (
    <section className="w-full px-4 sm:px-12 py-24" id="funcionalidades">
      <div className="max-w-6xl mx-auto flex flex-col items-center text-center mb-20">
        <span className="text-xs font-bold text-primary-container tracking-widest uppercase mb-3">Modularidade & Precisão</span>
        <h2 className="text-3xl sm:text-5xl font-bold text-on-surface max-w-3xl">
          Tudo o que você precisa para organizar seus atendimentos.
        </h2>
      </div>

      <div className="max-w-6xl mx-auto flex flex-col gap-20">
        {modules.map((module, index) => {
          const isReversed = index % 2 !== 0;

          const MockupComponent = module.Component;

          return (
            <div key={module.id} className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className={`lg:col-span-5 flex flex-col text-left ${isReversed ? 'lg:order-2' : 'lg:order-1'}`}>
                <span className="text-xs font-bold text-primary-container mb-2">{module.tag}</span>
                <h3 className="text-2xl font-bold text-on-surface mb-4">{module.title}</h3>
                <p className="text-lg text-on-surface-variant leading-relaxed mb-6">
                  {module.description}
                </p>
                <div className="flex items-center gap-2 text-sm text-primary-container">
                  <span className="material-symbols-outlined text-sm">check_circle</span>
                  <span>{module.feature}</span>
                </div>
              </div>

              <div className={`lg:col-span-7 bg-surface-container-low rounded-xl p-6 shadow-xl border border-white/5 ${isReversed ? 'lg:order-1' : 'lg:order-2'}`}>
              
                <MockupComponent />
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}