export const TargetAudience = () => {
  // Dados dos públicos-alvo
  const audiences = [
    { icon: 'content_cut', title: 'Barbearias', desc: 'Agilidade no controle de cadeiras e serviços rápidos com múltiplos barbeiros em horários simultâneos.' },
    { icon: 'brush', title: 'Salões de beleza', desc: 'Gestão de múltiplos profissionais e pacotes combinados de procedimentos com tempos de espera definidos.' },
    { icon: 'spa', title: 'Clínicas estéticas', desc: 'Horários organizados e histórico detalhado por atendimento para protocolos corporais e faciais.' },
    { icon: 'dentistry', title: 'Dentistas', desc: 'Precisão na marcação de consultas e intervalos de tempo adequados para esterilização e preparo da sala.' },
    { icon: 'psychology', title: 'Psicólogos e nutricionistas', desc: 'Agenda discreta e segura com foco em sessões pontuais, recorrências periódicas e continuidade do cuidado.' },
    { icon: 'person_pin', title: 'Profissionais autônomos', desc: 'O controle ideal para quem gerencia sua própria escala de trabalho e precisa focar no que faz de melhor.' }
  ]

  return (
    <section className="w-full px-4 sm:px-12 py-20 bg-surface-container-lowest" id="para-quem">
      {/* Cabeçalho */}
      <div className="max-w-6xl mx-auto flex flex-col items-center text-center mb-16">
        <h2 className="text-3xl sm:text-5xl font-bold text-on-surface mb-3">
          Feito para quem vive de atender bem.
        </h2>
        <p className="text-lg text-on-surface-variant max-w-2xl">
          Uma experiência de organização pensada para diferentes tipos de negócio.
        </p>
      </div>

      {/* Grid de Cards */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {audiences.map((item, index) => (
          <div 
            key={index}
            className="p-6 rounded-xl bg-surface-container text-left hover:bg-surface-container-high transition-all cursor-default"
          >
            {/* Ícone */}
            <div className="w-10 h-10 rounded-lg bg-primary-container/15 flex items-center justify-center text-primary-container mb-4">
              <span className="material-symbols-outlined text-xl">{item.icon}</span>
            </div>
            
            {/* Título */}
            <h3 className="text-lg font-semibold text-on-surface mb-2">
              {item.title}
            </h3>
            
            {/* Descrição */}
            <p className="text-sm text-on-surface-variant leading-relaxed">
              {item.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}