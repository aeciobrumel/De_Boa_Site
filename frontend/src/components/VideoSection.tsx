import { YOUTUBE_ID, YOUTUBE_URL } from '../config'

export function VideoSection() {
  const embed = `https://www.youtube-nocookie.com/embed/${YOUTUBE_ID}?rel=0`
  return (
    <section
      aria-labelledby="video-title"
      id="video"
      className="border-t border-[#dde4f1] bg-white py-10 sm:py-14 md:py-16"
    >
      <div className="mx-auto max-w-5xl px-6">
        <div className="grid gap-10 md:grid-cols-[0.95fr_1.05fr] md:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-secondary2">
              Durante a crise
            </p>
            <h2
              id="video-title"
              className="mt-2 text-2xl font-bold leading-tight text-primary sm:mt-3 sm:text-3xl "
            >
              Na crise, siga um passo a passo simples.
            </h2>
            <p className="mt-3 text-base leading-7 text-slate-700 sm:mt-4 sm:text-lg sm:leading-8">
              Você abre o app e segue: respirar, focar, ouvir e ler seus cartões.
            </p>
            <ul className="mt-4 list-disc space-y-2.5 pl-5 text-sm text-slate-700 marker:text-secondary2 sm:mt-6 sm:space-y-3 sm:text-base">
              <li>Respiração guiada.</li>
              <li>Cartões com frases de apoio.</li>
              <li>Áudio para manter o foco.</li>
            </ul>
          </div>
          <div>
            <div className="aspect-video overflow-hidden rounded-2xl bg-black shadow-lg">
              <iframe
                src={embed}
                title="Demonstração do aplicativo Cartões de Enfrentamento"
                loading="lazy"
                referrerPolicy="strict-origin-when-cross-origin"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                className="h-full w-full border-0"
              />
            </div>
            <p className="mt-2 text-center">
              <a
                href={YOUTUBE_URL}
                className="tap-target inline-flex items-center underline decoration-secondary2 underline-offset-4 hover:opacity-90"
                target="_blank"
                rel="noopener noreferrer"
              >
                Assistir no YouTube
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
