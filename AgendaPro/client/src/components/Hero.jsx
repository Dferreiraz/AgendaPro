import { DashboardMockup } from './DashboardMockup'

export const Hero = () => {
  return (
    <main className="pt-24">
      <section className="relative w-full px-4 sm:px-12 pt-12 pb-24 overflow-hidden hero-gradient">
        {/* Ambient Blue Glow Behind Hero */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[720px] h-[360px] bg-primary-container/10 blur-[140px] pointer-events-none rounded-full"></div>
        
        <div className="max-w-6xl mx-auto flex flex-col items-center text-center relative z-10">
          {/* Refined Pill Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-surface-container-high text-primary-container text-xs font-semibold mb-8 shadow-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-primary-container animate-pulse"></span>
            <span>GESTÃO DE AGENDAMENTOS SIMPLIFICADA</span>
          </div>

          {/* Monumental Headline */}
          <h1 className="text-4xl sm:text-5xl font-bold max-w-4xl text-on-surface tracking-tight mb-6 leading-tight">
            Sua agenda organizada. Seu negócio em <span className="text-primary-container">outro nível.</span>
          </h1>

          {/* Precise Subheadline */}
          <p className="text-lg text-on-surface-variant max-w-3xl mb-8 leading-relaxed">
            Organize horários, clientes e atendimentos em um só lugar. Tenha mais controle da rotina e uma visão mais clara do seu negócio com o AgendaPro.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center gap-4 mb-4">
            <a href="#cta-final" className="w-full sm:w-auto px-7 py-3 rounded-lg bg-primary-container text-white font-semibold shadow-xl shadow-primary-container/30 hover:shadow-primary-container/45 transition-all text-center">
              Conhecer o AgendaPro
            </a>
            <a href="#funcionalidades" className="w-full sm:w-auto px-7 py-3 rounded-lg bg-surface-container text-on-surface font-semibold hover:bg-surface-container-high transition-all text-center">
              Explorar funcionalidades
            </a>
          </div>

          {/* Supporting Statement */}
          <p className="text-sm text-on-surface-variant/70 mb-16">
            Menos complicação na rotina. Mais organização para atender.
          </p>

          {/* AQUI ESTÁ A MÁGICA: Chamamos o componente separado */}
          <DashboardMockup />
          
        </div>
      </section>
    </main>
  )
}