// Mockup 01: Agenda Inteligente
export const AgendaMockup = () => (
  <div className="flex flex-col gap-3">
    <div className="flex items-center justify-between mb-2">
      <span className="text-base font-semibold text-on-surface">Horários de Quinta-feira</span>
      <span className="text-xs font-bold text-primary-container">Visão diária</span>
    </div>
    
    {/* Item 1 */}
    <div className="p-3 rounded-lg bg-surface-container flex items-center justify-between">
      <div className="flex items-center gap-3">
        <span className="text-xs font-bold text-primary-container">09:00</span>
        <div>
          <p className="text-sm font-semibold text-on-surface">Mariana Vasconcelos</p>
          <p className="text-xs text-on-surface-variant">Consulta Completa • 45 min</p>
        </div>
      </div>
      <span className="text-[10px] font-bold px-2.5 py-1 rounded bg-surface-container-high text-on-surface-variant">Concluído</span>
    </div>

    {/* Item 2 (Destaque) */}
    <div className="p-3 rounded-lg bg-primary-container/10 flex items-center justify-between border border-primary-container/20">
      <div className="flex items-center gap-3">
        <span className="text-xs font-bold text-primary-container">10:00</span>
        <div>
          <p className="text-sm font-semibold text-on-surface">Carlos Henrique Dias</p>
          <p className="text-xs text-on-surface-variant">Retorno Periódico • 30 min</p>
        </div>
      </div>
      <span className="text-[10px] font-bold px-2.5 py-1 rounded bg-primary-container text-white">Em andamento</span>
    </div>

    {/* Item 3 */}
    <div className="p-3 rounded-lg bg-surface-container flex items-center justify-between">
      <div className="flex items-center gap-3">
        <span className="text-xs font-bold text-on-surface-variant">11:00</span>
        <div>
          <p className="text-sm font-semibold text-on-surface">Beatriz Ramos Ferreira</p>
          <p className="text-xs text-on-surface-variant">Sessão Terapêutica • 50 min</p>
        </div>
      </div>
      <span className="text-[10px] font-bold px-2.5 py-1 rounded bg-surface-container-high text-on-surface-variant">Confirmado</span>
    </div>
  </div>
);

// Mockup 02: Gestão de Clientes
export const ClientsMockup = () => (
  <div className="flex flex-col gap-3">
    <div className="flex items-center justify-between mb-2">
      <span className="text-base font-semibold text-on-surface">Base de Clientes</span>
      <span className="text-xs font-bold text-on-surface-variant bg-surface-container px-2 py-1 rounded">Total: 412</span>
    </div>
    
    <div className="overflow-x-auto">
      <table className="w-full text-left text-sm">
        <thead>
          <tr className="text-xs text-on-surface-variant border-b border-white/5">
            <th className="pb-3 font-medium">Cliente</th>
            <th className="pb-3 font-medium">Último Atendimento</th>
            <th className="pb-3 font-medium">Status</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-white/5">
          <tr>
            <td className="py-3">
              <p className="font-semibold text-on-surface text-xs">Lucas Andrade</p>
              <p className="text-[10px] text-on-surface-variant">(11) 98842-1200</p>
            </td>
            <td className="py-3 text-xs text-on-surface-variant">Ontem, 16:30</td>
            <td className="py-3"><span className="text-[10px] px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400 font-bold">Frequente</span></td>
          </tr>
          <tr>
            <td className="py-3">
              <p className="font-semibold text-on-surface text-xs">Fernanda Souza</p>
              <p className="text-[10px] text-on-surface-variant">(21) 97123-9988</p>
            </td>
            <td className="py-3 text-xs text-on-surface-variant">18 Outubro</td>
            <td className="py-3"><span className="text-[10px] px-2 py-0.5 rounded bg-primary-container/20 text-primary-container font-bold">Ativo</span></td>
          </tr>
          <tr>
            <td className="py-3">
              <p className="font-semibold text-on-surface text-xs">Renato Silveira</p>
              <p className="text-[10px] text-on-surface-variant">(31) 99231-4411</p>
            </td>
            <td className="py-3 text-xs text-on-surface-variant">Novo cadastro</td>
            <td className="py-3"><span className="text-[10px] px-2 py-0.5 rounded bg-tertiary/20 text-tertiary font-bold">Primeira vez</span></td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
);

// Mockup 03: Cadastro de Serviços
export const ServicesMockup = () => (
  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
    {/* Card 1 */}
    <div className="p-4 rounded-lg bg-surface-container flex flex-col justify-between border border-white/5">
      <div>
        <span className="text-[10px] font-bold text-primary-container px-2 py-0.5 rounded bg-primary-container/15">Cabelo & Barba</span>
        <p className="text-sm font-semibold text-on-surface mt-2">Corte Masculino Premium</p>
        <p className="text-xs text-on-surface-variant mt-1">Duração: 45 min</p>
      </div>
      <p className="text-lg font-bold text-primary-container mt-4">R$ 65,00</p>
    </div>
    {/* Card 2 */}
    <div className="p-4 rounded-lg bg-surface-container flex flex-col justify-between border border-white/5">
      <div>
        <span className="text-[10px] font-bold text-tertiary px-2 py-0.5 rounded bg-tertiary/15">Estética</span>
        <p className="text-sm font-semibold text-on-surface mt-2">Tratamento Facial Revital</p>
        <p className="text-xs text-on-surface-variant mt-1">Duração: 60 min</p>
      </div>
      <p className="text-lg font-bold text-tertiary mt-4">R$ 180,00</p>
    </div>
    {/* Card 3 */}
    <div className="p-4 rounded-lg bg-surface-container flex flex-col justify-between border border-white/5">
      <div>
        <span className="text-[10px] font-bold text-primary-container px-2 py-0.5 rounded bg-primary-container/15">Saúde</span>
        <p className="text-sm font-semibold text-on-surface mt-2">Consulta Nutricional</p>
        <p className="text-xs text-on-surface-variant mt-1">Duração: 50 min</p>
      </div>
      <p className="text-lg font-bold text-primary-container mt-4">R$ 220,00</p>
    </div>
    {/* Card 4 */}
    <div className="p-4 rounded-lg bg-surface-container flex flex-col justify-between border border-white/5">
      <div>
        <span className="text-[10px] font-bold text-emerald-400 px-2 py-0.5 rounded bg-emerald-500/15">Odonto</span>
        <p className="text-sm font-semibold text-on-surface mt-2">Profilaxia e Higiene</p>
        <p className="text-xs text-on-surface-variant mt-1">Duração: 40 min</p>
      </div>
      <p className="text-lg font-bold text-emerald-400 mt-4">R$ 150,00</p>
    </div>
  </div>
);

// Mockup 04: Agendamento Online
export const BookingMockup = () => (
  <div className="p-4 rounded-lg bg-surface-container border border-white/5">
    <div className="flex items-center gap-3 mb-4">
      <div className="w-10 h-10 rounded-full bg-primary-container/20 flex items-center justify-center text-primary-container">
        <span className="material-symbols-outlined text-lg">calendar_add_on</span>
      </div>
      <div>
        <p className="text-sm font-semibold text-on-surface">Fluxo de Agendamento</p>
        <p className="text-xs text-on-surface-variant">Interface simplificada para o cliente</p>
      </div>
    </div>
    
    {/* Seleção de Horário */}
    <div className="grid grid-cols-3 gap-2 mb-3">
      <button className="py-2 rounded bg-surface-container-high text-xs text-on-surface text-center hover:bg-primary-container/20 transition-colors">09:30</button>
      <button className="py-2 rounded bg-primary-container text-white text-xs font-bold text-center shadow-lg shadow-primary-container/20">11:00 ✓</button>
      <button className="py-2 rounded bg-surface-container-high text-xs text-on-surface text-center hover:bg-primary-container/20 transition-colors">15:30</button>
    </div>
    
    {/* Mensagem de Confirmação */}
    <div className="p-3 rounded bg-surface-container-high text-xs text-on-surface-variant border border-white/5">
      Confirmado para <span className="text-on-surface font-semibold">Quinta, 24 de Outubro às 11:00</span> com envio imediato de lembrete.
    </div>
  </div>
);