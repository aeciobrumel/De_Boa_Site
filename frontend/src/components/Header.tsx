export function Header() {
  return (
    <header className="bg-primary">
      <div className="container mx-auto max-w-5xl px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img
            src="/img/logo-horizontal-white.png"
            alt="Dboa — Cartões de Enfrentamento"
            className="h-10 w-auto"
            loading="eager"
          />
        </div>
        <nav aria-label="Menu principal" className="hidden sm:block">
          <ul className="flex gap-6">
            <li>
              <a href="#inicio" className="tap-target inline-flex items-center hover:opacity-90">
                Início
              </a>
            </li>
            <li>
              <a href="#video" className="tap-target inline-flex items-center hover:opacity-90">
                Sobre
              </a>
            </li>
            <li>
              <a href="#download" className="tap-target inline-flex items-center hover:opacity-90">
                Baixe o app
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

