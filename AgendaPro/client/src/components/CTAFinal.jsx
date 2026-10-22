export const CTAFinal = () => {
  return (
    <section className="w-full px-4 sm:px-12 py-24 relative overflow-hidden" id="cta-final">
      {/* Container com gradiente e bordas suaves */}
      <div className="max-w-5xl mx-auto p-12 sm:p-16 rounded-2xl bg-gradient-to-b from-surface-container to-surface-container-low text-center relative z-10 shadow-2xl border border-white/5">
        <div className="max-w-2xl mx-auto flex flex-col items-center">
          
          <h2 className="text-3xl sm:text-5xl font-bold text-on-surface mb-4">
            Sua agenda merece uma gestão melhor.
          </h2>
          
          <p className="text-lg text-on-surface-variant mb-8 leading-relaxed">
            Conheça o AgendaPro e descubra uma maneira mais organizada de gerenciar seus atendimentos.
          </p>
          
          {/* Botão Principal */}
          <a 
            href="/register" 
            className="px-8 py-3.5 rounded-lg bg-primary-container text-white font-bold text-lg shadow-xl shadow-primary-container/30 hover:shadow-primary-container/50 hover:scale-105 transition-all"
          >
            Conhecer o AgendaPro
          </a>
          
          <p className="text-sm text-on-surface-variant/70 mt-4">
            Organize seus agendamentos de forma profissional.
          </p>
        </div>
      </div>
    </section>
  )
}