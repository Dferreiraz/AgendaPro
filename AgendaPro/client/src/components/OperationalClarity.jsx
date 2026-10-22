export const OperationalClarity = () => {
  // Dados da timeline
  const timelineEvents = [
    {
      time: "13:00 - 14:00",
      client: "Clara Meneses",
      service: "Sessão Regular",
      status: "Finalizado",
      statusColor: "text-on-surface-variant",
      dotColor: "bg-primary-container"
    },
    {
      time: "14:30 - 15:15",
      client: "Dr. Thiago Monteiro",
      service: "Consulta Especializada",
      status: "Próximo",
      statusColor: "text-tertiary",
      dotColor: "bg-tertiary"
    },
    {
      time: "16:00 - 17:00",
      client: "Renata Silveira",
      service: "Primeiro Atendimento",
      status: "Programado",
      statusColor: "text-on-surface-variant",
      dotColor: "bg-on-surface-variant/50"
    }
  ]

  return (
    <section className="w-full px-4 sm:px-12 py-24 bg-gradient-to-b from-surface-container-lowest to-surface">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-12">
        
        {/* Coluna de Texto (Esquerda) */}
        <div className="lg:w-1/2 text-left">
          <span className="text-xs font-bold text-primary-container tracking-widest uppercase mb-3 block">
            Clareza Operacional
          </span>
          <h2 className="text-3xl sm:text-5xl font-bold text-on-surface mb-6 leading-tight">
            Mais clareza para sua rotina. Mais controle sobre seus atendimentos.
          </h2>
          <p className="text-lg text-on-surface-variant leading-relaxed mb-6">
            Uma interface pensada para facilitar o acesso às informações importantes, reduzir a desorganização e tornar a gestão diária mais prática.
          </p>
          
          {/* Lista de Benefícios */}
          <div className="space-y-3">
            <div className="flex items-center gap-3 text-sm text-on-surface">
              <span className="w-2 h-2 rounded-full bg-primary-container"></span>
              <span>Acompanhamento em tempo real de horários ocupados e livres</span>
            </div>
            <div className="flex items-center gap-3 text-sm text-on-surface">
              <span className="w-2 h-2 rounded-full bg-primary-container"></span>
              <span>Alívio visual sem sobrecarga de menus ou dados irrelevantes</span>
            </div>
          </div>
        </div>

        {/* Coluna do Mockup (Direita) - Timeline */}
        <div className="lg:w-1/2 w-full p-6 rounded-xl bg-surface-container shadow-2xl relative border border-white/5">
          {/* Header do Mockup */}
          <div className="flex items-center justify-between pb-4">
            <span className="text-base font-semibold text-on-surface">Linha do Tempo em Tempo Real</span>
            <span className="text-xs px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400 font-bold">
              Hoje • 14:15
            </span>
          </div>

          {/* Timeline Vertical */}
          <div className="relative pl-6 space-y-6">

            <div className="absolute left-2 top-2 bottom-2 w-0.5 bg-surface-container-high"></div>

            {timelineEvents.map((event, index) => (
              <div key={index} className="relative">
                {/* Bolinha da timeline */}
                <span className={`absolute -left-[22px] top-1.5 w-3 h-3 rounded-full ${event.dotColor}`}></span>
                
                {/* Card do Agendamento */}
                <div className="p-3 rounded-lg bg-surface-container-high">
                  <div className="flex justify-between items-center">
                    <span className={`text-xs font-bold ${event.statusColor}`}>{event.time}</span>
                    <span className={`text-[10px] ${event.statusColor}`}>{event.status}</span>
                  </div>
                  <p className="text-sm font-semibold text-on-surface mt-1">{event.client}</p>
                  <p className="text-xs text-on-surface-variant">{event.service}</p>
                </div>
              </div>
            ))}

            {/* Indicador "AGORA" */}
            <div className="relative flex items-center gap-2 -my-3 py-1">
              <span className="absolute -left-[24px] w-4 h-4 rounded-full bg-primary-container/40 flex items-center justify-center">
                <span className="w-2 h-2 rounded-full bg-primary-container animate-ping"></span>
              </span>
              <div className="w-full h-0.5 bg-primary-container/80"></div>
              <span className="text-[10px] font-bold text-primary-container px-1.5 py-0.5 rounded bg-primary-container/20 whitespace-nowrap">
                AGORA 14:15
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}