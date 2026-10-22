export const Header = () => {
  return (
    <header className="fixed top-0 w-full z-50 flex justify-between items-center px-4 sm:px-12 py-4 bg-surface/80 backdrop-blur-md border-b border-white/5 shadow-sm">
      <div className="flex items-center gap-2">
        <span className="text-2xl font-bold text-on-surface tracking-tight">AgendaPro</span>
      </div>
      
      <nav className="hidden md:flex gap-6 items-center">
        <a href="#funcionalidades" className="text-on-surface-variant hover:text-primary-container transition-colors duration-200">Features</a>
        <a href="#como-funciona" className="text-on-surface-variant hover:text-primary-container transition-colors duration-200">Solutions</a>
        <a href="#faq" className="text-on-surface-variant hover:text-primary-container transition-colors duration-200">Resources</a>
      </nav>
      
      <div className="flex gap-3">
        <a href="/login" className="text-on-surface hover:text-primary-container transition-all px-4 py-2 text-sm font-semibold">
          Sign In
        </a>
        <a href="/register" className="bg-primary-container text-white px-6 py-2 rounded-lg hover:opacity-90 transition-all text-sm font-semibold">
          Login
        </a>
      </div>
    </header>
  )
}