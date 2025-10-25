import { YOUTUBE_ID, YOUTUBE_URL } from '../config'

export function VideoSection() {
  const embed = `https://www.youtube-nocookie.com/embed/${YOUTUBE_ID}?rel=0`
  return (
    <section aria-labelledby="video-title" id="video" className="py-12">
      <div className="mx-auto max-w-5xl px-6">
        <h2 id="video-title" className="sr-only">
          Demonstração do aplicativo Cartões de Enfrentamento
        </h2>
        <p className="mb-6 text-lg text-secondary1/90">
          Uma das principais funcionalidades do aplicativo é te ajudar a passar por uma crise. Nessa
          funcionalidade, um conjunto de cards é exibido com técnicas de relaxamento e cards criados
          por você. Respire, escute a música e acompanhe os cartões. Ficaremos juntos até isso
          passar!
        </p>
        <div className="aspect-video overflow-hidden rounded-xl bg-black">
          {/* TODO: {{VIDEO_ID}} se necessário */}
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
    </section>
  )
}

