import { useEffect, useRef, useState } from 'react'

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const mobileMenuRef = useRef<HTMLElement | null>(null)
  const menuButtonRef = useRef<HTMLButtonElement | null>(null)

  useEffect(() => {
    if (!isMobileMenuOpen) return

    const handlePointerDown = (event: MouseEvent) => {
      const target = event.target as Node
      if (mobileMenuRef.current?.contains(target) || menuButtonRef.current?.contains(target)) return
      setIsMobileMenuOpen(false)
    }

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setIsMobileMenuOpen(false)
    }

    document.addEventListener('mousedown', handlePointerDown)
    document.addEventListener('keydown', handleEscape)
    return () => {
      document.removeEventListener('mousedown', handlePointerDown)
      document.removeEventListener('keydown', handleEscape)
    }
  }, [isMobileMenuOpen])

  return (
    <header className="relative bg-primary">
      <div className="container mx-auto max-w-5xl px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img
            src="/img/logo-horizontal-white.png"
            alt="Dboa — Cartões de Enfrentamento"
            className="h-7 w-auto sm:h-10"
            loading="eager"
          />
        </div>
        <button
          ref={menuButtonRef}
          type="button"
          aria-expanded={isMobileMenuOpen}
          aria-controls="mobile-menu"
          aria-label={isMobileMenuOpen ? 'Fechar menu' : 'Abrir menu'}
          className="tap-target inline-flex h-11 w-11 items-center justify-center rounded-lg text-white focus-visible:outline-accent sm:hidden"
          onClick={() => setIsMobileMenuOpen((current) => !current)}
        >
          <span className="sr-only">Menu</span>
          <span className="relative h-5 w-6" aria-hidden>
            <span
              className={`absolute left-0 top-0 h-0.5 w-6 bg-current transition-transform duration-300 ease-out ${
                isMobileMenuOpen ? 'translate-y-2 rotate-45' : ''
              }`}
            />
            <span
              className={`absolute left-0 top-2 h-0.5 w-6 bg-current transition-opacity duration-200 ${
                isMobileMenuOpen ? 'opacity-0' : 'opacity-100'
              }`}
            />
            <span
              className={`absolute left-0 top-4 h-0.5 w-6 bg-current transition-transform duration-300 ease-out ${
                isMobileMenuOpen ? '-translate-y-2 -rotate-45' : ''
              }`}
            />
          </span>
        </button>
        <nav aria-label="Menu principal" className="hidden sm:block text-white">
          <ul className="flex gap-6">
            <li>
              <a href="#inicio" className="tap-target inline-flex items-center hover:opacity-90">
                Início
              </a>
            </li>
            <li>
              <a href="#video" className="tap-target inline-flex items-center hover:opacity-90">
                Como funciona
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
      <div
        className={`fixed inset-0 z-20 bg-transparent transition-opacity duration-300 sm:hidden ${
          isMobileMenuOpen ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0'
        }`}
        onClick={() => setIsMobileMenuOpen(false)}
        aria-hidden
      />
      <nav
        id="mobile-menu"
        ref={mobileMenuRef}
        aria-label="Menu principal mobile"
        className={`absolute inset-x-0 top-full z-30 border-t border-white/20 bg-primary transition-all duration-300 ease-out sm:hidden ${
          isMobileMenuOpen
            ? 'pointer-events-auto translate-y-0 opacity-100'
            : 'pointer-events-none -translate-y-2 opacity-0'
        }`}
      >
        <ul className="container mx-auto max-w-5xl space-y-1 px-6 py-3 text-white">
          <li>
            <a
              href="#inicio"
              className="tap-target block rounded-md px-3 py-2 hover:bg-white/10"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Início
            </a>
          </li>
          <li>
            <a
              href="#video"
              className="tap-target block rounded-md px-3 py-2 hover:bg-white/10"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Como funciona
            </a>
          </li>
          <li>
            <a
              href="#download"
              className="tap-target block rounded-md px-3 py-2 hover:bg-white/10"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Baixe o app
            </a>
          </li>
        </ul>
      </nav>
    </header>
  )
}
