import { ANDROID_URL } from '../config'

export function Hero() {
  return (
    <section
      id="inicio"
      aria-labelledby="hero-title"
      className="bg-[linear-gradient(180deg,_#ffffff_0%,_#f6f8fc_100%)] pt-8 pb-12 sm:py-14 md:py-16"
    >
      <div className="mx-auto grid w-full max-w-5xl grid-cols-1 items-center gap-4 px-6 md:grid-cols-[minmax(0,1fr)_clamp(15rem,28vw,19rem)] md:gap-6 lg:gap-8">
        <div className="w-full max-w-none space-y-6 text-center sm:space-y-7 md:max-w-[36rem] md:space-y-8 md:text-left">
          <header className="space-y-5 md:space-y-6">
            <p className="inline-flex max-w-full rounded-full bg-secondary2/10 px-4 py-2 text-[0.59rem] font-semibold uppercase leading-tight tracking-[0.12em] text-secondary1 sm:text-sm">
              Ferramentas guiadas para te acalmar na crise
            </p>
            <h1
              id="hero-title"
              className="mx-auto max-w-[16ch] text-[1.55rem] font-bold leading-[1.08] text-primary sm:max-w-[14ch] sm:text-[1.7rem] sm:text-secondary1 md:mx-0 md:max-w-[16ch] md:text-[1.85rem] lg:text-[2.05rem]"
            >
              Saiba o que fazer na crise, sem precisar pensar demais.
            </h1>
          </header>
          <div className="flex flex-wrap items-center justify-center gap-3 md:justify-start">
            <a
              className="tap-target inline-flex h-10 w-auto items-center justify-center whitespace-nowrap rounded-full bg-primary px-5 text-sm font-semibold text-white shadow-[0_12px_24px_rgba(54,80,125,0.18)] hover:opacity-95 focus-visible:outline-accent sm:h-auto sm:min-h-[52px] sm:w-auto sm:px-6 sm:py-3 sm:text-base"
              href={ANDROID_URL}
              target="_blank"
              rel="noopener noreferrer"
            >
              Baixe agora
            </a>
          </div>
        </div>
        <div className="hidden md:flex md:pt-0 md:justify-self-start">
          <img
            src="/img/celular-mockup.png"
            alt="Mockup do app Dboa no celular"
            className="h-auto w-full max-w-[112px] rotate-[3deg] drop-shadow-[0_20px_44px_rgba(54,80,125,0.16)] sm:max-w-[136px] md:max-w-[178px] lg:max-w-[210px]"
            loading="eager"
          />
        </div>
      </div>
    </section>
  )
}
