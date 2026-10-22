// src/components/Footer.jsx

export const Footer = () => {
  return (
    <footer className="w-full px-4 sm:px-12 py-12 bg-surface-container-lowest border-t border-white/5">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        
        {/* Logo e Slogan */}
        <div className="flex items-center gap-2">
          <span className="text-xl font-bold text-on-surface">AgendaPro</span>
          <span className="text-xs text-on-surface-variant hidden sm:inline">
            — Gestão de agendamentos simplificada e eficiente.
          </span>
        </div>

        {/* Links de Navegação */}
        <div className="flex flex-wrap gap-6 text-sm text-on-surface-variant">
          <a href="#funcionalidades" className="hover:text-primary-container transition-colors">Funcionalidades</a>
          <a href="#como-funciona" className="hover:text-primary-container transition-colors">Como Funciona</a>
          <a href="#para-quem" className="hover:text-primary-container transition-colors">Para Quem É</a>
          <a href="#faq" className="hover:text-primary-container transition-colors">FAQ</a>
        </div>
      </div>
    </footer>
  )
}