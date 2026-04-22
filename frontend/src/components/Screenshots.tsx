import { Carousel } from './Carousel'

const screenshots = [
  { src: '/img/home.png', alt: 'Tela inicial do aplicativo' },
  { src: '/img/musica.jpeg', alt: 'Tela de edição de música' },
  { src: '/img/drtop.jpeg', alt: 'Tela de deck de cartões' },
  { src: '/img/edid.jpeg', alt: 'Tela de edição de cartão' },
  { src: '/img/resp.jpeg', alt: 'Tela de respiração guiada' },
  { src: '/img/pass.jpeg', alt: 'Exemplo de cartão narrado' },
]

export function Screenshots() {
  return (
    <section
      aria-labelledby="screenshots-title"
      className="border-t border-[#dde4f1] bg-[#f7f9fc] py-10 sm:py-14"
    >
      <div className="mx-auto grid max-w-5xl grid-cols-1 items-center gap-8 px-6 md:grid-cols-2">
        <div>
          <h2 id="screenshots-title" className="mb-3 text-xl font-bold text-primary sm:mb-4 sm:text-2xl">
            Veja o fluxo no app
          </h2>
          <p className="mb-3 text-sm leading-6 text-slate-700 sm:mb-4 sm:text-base sm:leading-8">
            Monte seus cartões antes da crise. Na hora difícil, siga o guia.
          </p>
          <ul className="space-y-2.5 text-sm text-slate-700 sm:space-y-3 sm:text-base">
            <li>Personalize os cartões com frases do seu jeito.</li>
            <li>Deixe tudo pronto antes da crise.</li>
            <li>Na hora difícil, siga o passo a passo.</li>
            <li>Use áudio e vibração para manter o foco.</li>
          </ul>
        </div>
        <div>
          <Carousel
            images={screenshots}
            maxHeightClass="h-[34vh] sm:h-[40vh] md:h-[52vh]"
            containerClass="bg-gray-100  border border-gray-200 shadow-sm p-2 sm:p-3 rounded-xl"
            ariaLabel="Galeria de imagens do app"
          />
        </div>
      </div>
    </section>
  )
}
