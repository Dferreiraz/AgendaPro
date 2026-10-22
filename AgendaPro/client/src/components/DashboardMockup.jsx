export const DashboardMockup = () => {
  return (
    <div className="relative w-full max-w-5xl rounded-xl bg-surface-container-low shadow-2xl overflow-visible group border border-white/5">
      {/* Floating Glass Card 1 (Left) */}
      <div className="absolute -top-6 -left-4 sm:-left-8 z-30 p-3.5 rounded-xl bg-surface-container-high/95 backdrop-blur-md shadow-xl hidden sm:flex items-center gap-3 border border-white/5">
        <div className="w-9 h-9 rounded-lg bg-primary-container/20 flex items-center justify-center text-primary-container">
          <span className="material-symbols-outlined text-lg">event_upcoming</span>
        </div>
        <div className="text-left">
          <p className="text-xs text-on-surface-variant">Próximo atendimento</p>
          <p className="text-sm font-semibold text-on-surface">10:30 • Dra. Beatriz</p>
        </div>
      </div>

      {/* Floating Glass Card 2 (Right) */}
      <div className="absolute -bottom-6 -right-4 sm:-right-8 z-30 p-3.5 rounded-xl bg-surface-container-high/95 backdrop-blur-md shadow-xl hidden sm:flex items-center gap-3 border border-white/5">
        <div className="w-9 h-9 rounded-lg bg-emerald-500/20 flex items-center justify-center text-emerald-400">
          <span className="material-symbols-outlined text-lg">trending_up</span>
        </div>
        <div className="text-left">
          <p className="text-xs text-on-surface-variant">Taxa de comparecimento</p>
          <p className="text-sm font-bold text-emerald-400">98% pontualidade</p>
        </div>
      </div>

      {/* Window Title Bar */}
      <div className="flex items-center justify-between px-4 py-3 bg-surface-container-lowest border-b border-white/5">
        <div className="flex items-center gap-2">
          <span className="w-3 h-3 rounded-full bg-red-500/80"></span>
          <span className="w-3 h-3 rounded-full bg-yellow-500/80"></span>
          <span className="w-3 h-3 rounded-full bg-green-500/80"></span>
        </div>
        <div className="text-xs text-on-surface-variant/50 tracking-wider hidden sm:block">app.agendapro.io/workspace</div>
        <div className="w-12"></div>
      </div>

      {/* Mockup Workspace */}
      <div className="grid grid-cols-12 min-h-[460px]">
        {/* Sidebar */}
        <div className="hidden md:flex md:col-span-2 bg-surface-container-lowest flex-col justify-between p-3 border-r border-white/5">
          <div className="flex flex-col gap-1.5">
            <div className="flex items-center gap-2.5 px-3 py-2 rounded-lg bg-surface-container text-on-surface font-medium text-sm">
              <span className="material-symbols-outlined text-primary-container text-base">dashboard</span>
              <span>Dashboard</span>
            </div>
            <div className="flex items-center gap-2.5 px-3 py-2 rounded-lg text-on-surface-variant hover:bg-surface-container-low transition-colors text-sm">
              <span className="material-symbols-outlined text-base">calendar_view_week</span>
              <span>Agenda</span>
            </div>
            <div className="flex items-center gap-2.5 px-3 py-2 rounded-lg text-on-surface-variant hover:bg-surface-container-low transition-colors text-sm">
              <span className="material-symbols-outlined text-base">groups</span>
              <span>Clientes</span>
            </div>
          </div>
          <div className="flex items-center gap-2 px-3 py-2 text-on-surface-variant text-sm">
            <span className="material-symbols-outlined text-base">settings</span>
            <span>Ajustes</span>
          </div>
        </div>

        {/* Main Dashboard Area */}
        <div className="col-span-12 md:col-span-10 p-5 flex flex-col gap-4 bg-surface-container-low">
          {/* Top App Bar */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div>
              <h3 className="text-base font-semibold text-on-surface text-left">Visão Geral Semanal</h3>
              <p className="text-sm text-on-surface-variant text-left">Quinta-feira, 24 de Outubro</p>
            </div>
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-2 bg-surface-container px-3 py-1.5 rounded-lg text-sm text-on-surface-variant">
                <span className="material-symbols-outlined text-sm">search</span>
                <span className="text-xs hidden sm:inline">Buscar cliente...</span>
              </div>
              <div className="w-8 h-8 rounded-full bg-primary-container text-white flex items-center justify-center font-bold text-xs">AP</div>
            </div>
          </div>

          {/* Quick Stats Row */}
          <div className="grid grid-cols-3 gap-3">
            <div className="p-3 rounded-lg bg-surface-container text-left">
              <p className="text-xs text-on-surface-variant">Hoje</p>
              <p className="text-base font-semibold text-on-surface font-bold">24 agendamentos</p>
            </div>
            <div className="p-3 rounded-lg bg-surface-container text-left">
              <p className="text-xs text-on-surface-variant">Clientes Ativos</p>
              <p className="text-base font-semibold text-primary-container font-bold">382 cadastrados</p>
            </div>
            <div className="p-3 rounded-lg bg-surface-container text-left">
              <p className="text-xs text-on-surface-variant">Pendentes</p>
              <p className="text-base font-semibold text-tertiary font-bold">3 confirmações</p>
            </div>
          </div>

          {/* Calendar Schedule Visual */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 pt-2">
            {/* Card 1 */}
            <div className="flex flex-col gap-2">
              <div className="text-xs text-on-surface-variant">09:00</div>
              <div className="p-2.5 rounded-lg bg-primary-container/20 border border-primary-container/30">
                <p className="font-medium text-xs text-primary-container">09:00 - Dr. Ricardo</p>
                <p className="text-[11px] text-on-surface-variant mt-0.5">Consulta de Retorno</p>
                <span className="inline-block mt-2 text-[9px] px-1.5 py-0.5 rounded bg-primary-container text-white font-bold">Confirmado</span>
              </div>
            </div>
            {/* Card 2 */}
            <div className="flex flex-col gap-2">
              <div className="text-xs text-on-surface-variant">10:30</div>
              <div className="p-2.5 rounded-lg bg-emerald-500/15 border border-emerald-500/30">
                <p className="font-medium text-xs text-emerald-300">10:30 - João Silva</p>
                <p className="text-[11px] text-on-surface-variant mt-0.5">Procedimento Padrão</p>
                <span className="inline-block mt-2 text-[9px] px-1.5 py-0.5 rounded bg-emerald-400 text-surface-container-lowest font-bold">Em atendimento</span>
              </div>
            </div>
            {/* Card 3 */}
            <div className="flex flex-col gap-2">
              <div className="text-xs text-on-surface-variant">14:00</div>
              <div className="p-2.5 rounded-lg bg-tertiary-container/20 border border-tertiary-container/30">
                <p className="font-medium text-xs text-tertiary">14:00 - Juliana Duarte</p>
                <p className="text-[11px] text-on-surface-variant mt-0.5">Avaliação Inicial</p>
                <span className="inline-block mt-2 text-[9px] px-1.5 py-0.5 rounded bg-tertiary text-white font-bold">Pendente</span>
              </div>
            </div>
            {/* Card 4 */}
            <div className="flex flex-col gap-2">
              <div className="text-xs text-on-surface-variant">16:15</div>
              <div className="p-2.5 rounded-lg bg-primary-container/20 border border-primary-container/30">
                <p className="font-medium text-xs text-primary-container">16:15 - Marcos Lima</p>
                <p className="text-[11px] text-on-surface-variant mt-0.5">Sessão Regular</p>
                <span className="inline-block mt-2 text-[9px] px-1.5 py-0.5 rounded bg-primary-container text-white font-bold">Confirmado</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}