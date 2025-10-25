import { ANDROID_URL } from '../config'

export function Hero() {
  return (
    <section id="inicio" className="bg-bg py-12">
      <div className="mx-auto grid max-w-5xl grid-cols-1 items-center gap-8 px-6 md:grid-cols-2">
        <div className="space-y-6">
          <header className="space-y-3">
            <h1 className="text-3xl font-bold leading-tight md:text-4xl">Cartões de Enfrentamento</h1>
            <p className="text-lg text-secondary1/90">
              Ajuda prática e acolhedora para momentos de ansiedade.
            </p>
          </header>
          <div className="flex flex-wrap gap-3">
            {/* TODO: {{ANDROID_URL}} se necessário */}
            <a
              className="tap-target rounded-full bg-primary px-6 py-3 font-semibold text-white hover:opacity-95 focus-visible:outline-accent"
              href={ANDROID_URL}
              target="_blank"
              rel="noopener noreferrer"
            >
              Baixar para Android
            </a>
            <a
              className="tap-target rounded-full border-2 border-secondary2 px-6 py-3 font-semibold hover:opacity-95"
              href="#video"
            >
              Saiba mais
            </a>
          </div>
        </div>
        <div className="flex justify-center md:justify-end">
          <img
            src="/img/celularApp.png"
            alt="Prévia do app Dboa no celular"
            className="h-56 w-auto rounded-xl sm:h-64 md:h-72 lg:h-80 max-w-full"
            loading="eager"
          />
        </div>
      </div>
    </section>
  )
}
