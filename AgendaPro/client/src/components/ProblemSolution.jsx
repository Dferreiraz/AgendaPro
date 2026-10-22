export const ProblemSolution = () => {
    // Dados dos cards
    const features = [
        {
            icon: 'schedule',
            title: 'Horários organizados',
            description: 'Tenha uma visão mais clara dos seus agendamentos e da sua rotina diária sem sobreposição de atendimentos.'
        },
        {
            icon: 'folder_shared',
            title: 'Clientes centralizados',
            description: 'Consulte e organize as informações dos seus clientes em um só lugar, mantendo registros precisos sempre à mão.'
        },
        {
            icon: 'tune',
            title: 'Serviços sob controle',
            description: 'Estruture seus serviços, valores e durações para facilitar a gestão dinâmica e o ritmo dos seus atendimentos.'
        }
    ]

    return (
        <section className="w-full px-4 sm:px-12 py-20 bg-surface-container-lowest">
            {/* Cabeçalho da Seção */}
            <div className="max-w-6xl mx-auto flex flex-col items-center text-center mb-16">
                <h2 className="text-3xl sm:text-5xl font-bold text-on-surface mb-4">
                    Sua rotina não precisa ser uma bagunça.
                </h2>
                <p className="text-lg text-on-surface-variant max-w-2xl leading-relaxed">
                    Controlar horários, acompanhar clientes e organizar atendimentos não deveria consumir mais tempo do que cuidar do seu próprio negócio.
                </p>
            </div>

            {/* Grid de Cards */}
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
                {features.map((feature, index) => (
                    <div
                        key={index}
                        className="p-8 rounded-xl bg-surface-container flex flex-col items-start text-left hover:bg-surface-container-high transition-all"
                    >
                        {/* Ícone */}
                        <div className="w-12 h-12 rounded-lg bg-primary-container/15 flex items-center justify-center text-primary-container mb-6">
                            <span className="material-symbols-outlined text-2xl">{feature.icon}</span>
                        </div>

                        {/* Título */}
                        <h3 className="text-lg font-semibold text-on-surface mb-2">
                            {feature.title}
                        </h3>

                        {/* Descrição */}
                        <p className="text-sm text-on-surface-variant leading-relaxed">
                            {feature.description}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    )
}