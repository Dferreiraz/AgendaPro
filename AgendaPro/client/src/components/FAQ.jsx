import { useState } from 'react'

export const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null)

  const toggleFAQ = (index) => {

    setActiveIndex(activeIndex === index ? null : index)
  }

  const questions = [
    { q: "O que é o AgendaPro?", a: "Uma plataforma SaaS completa projetada para simplificar a gestão de agendamentos, clientes e serviços para profissionais autônomos e empresas de serviços." },
    { q: "Para quais tipos de negócio ele foi desenvolvido?", a: "Ideal para profissionais autônomos, clínicas de saúde, estúdios de beleza, barbearias, consultórios médicos e odontológicos, além de qualquer prestador de serviços que dependa de agendamento prévio." },
    { q: "Posso organizar meus clientes e serviços?", a: "Sim, a plataforma centraliza todo o cadastro de clientes, dados de contato e catálogo detalhado de serviços com durações, valores e regras de atendimento personalizadas." },
    { q: "Como funciona a gestão dos agendamentos?", a: "Por meio de uma grade visual intuitiva diária e semanal, onde você visualiza status, horários ocupados, intervalos e evita conflitos de agenda de forma automatizada." },
    { q: "O AgendaPro possui agendamento online?", a: "A plataforma integra ferramentas modernas para visualização de disponibilidade de horários e confirmação ágil dos atendimentos diretamente pelos clientes." },
    { q: "Como posso começar a utilizar a plataforma?", a: "Você pode criar sua conta em minutos ou solicitar uma demonstração guiada pelo botão principal da página para conhecer todos os recursos na prática." }
  ]

  return (
    <section className="w-full px-4 sm:px-12 py-24 bg-surface-container-lowest" id="faq">
      <div className="max-w-4xl mx-auto flex flex-col items-center text-center mb-16">
        <span className="text-xs font-bold text-primary-container tracking-widest uppercase mb-3">Transparência</span>
        <h2 className="text-3xl sm:text-5xl font-bold text-on-surface">
          Dúvidas sobre o AgendaPro?
        </h2>
      </div>

      <div className="max-w-3xl mx-auto flex flex-col gap-3">
        {questions.map((item, index) => {
          const isOpen = activeIndex === index

          return (
            <div 
              key={index} 
              className={`rounded-xl bg-surface-container overflow-hidden transition-all duration-300 ${isOpen ? 'ring-1 ring-primary-container/30' : ''}`}
            >
              {/* Botão da Pergunta */}
              <button 
                onClick={() => toggleFAQ(index)}
                className="w-full p-5 text-left flex items-center justify-between text-base font-semibold text-on-surface hover:text-primary-container transition-colors"
              >
                <span>{item.q}</span>
                {/* Ícone que gira quando aberto */}
                <span className={`material-symbols-outlined transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>
                  expand_more
                </span>
              </button>

              {/* Área da Resposta (Controlada pela altura máxima) */}
              <div 
                className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'}`}
              >
                <div className="px-5 pb-5 text-sm text-on-surface-variant leading-relaxed">
                  {item.a}
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}