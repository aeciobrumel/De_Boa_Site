import { Carousel } from './Carousel'

const screenshots = [
  { src: '/img/img-inicial.jpeg', alt: 'Tela inicial do aplicativo' },
  { src: '/img/img-menu.jpeg', alt: 'Tela de menu do aplicativo' },
  { src: '/img/img-deck.jpeg', alt: 'Tela de deck de cartões' },
  { src: '/img/img-edit.jpeg', alt: 'Tela de edição de cartão' },
  { src: '/img/img-respira.jpeg', alt: 'Tela de respiração guiada' },
  { src: '/img/img-card.jpeg', alt: 'Exemplo de cartão narrado' },
]

export function Screenshots() {
  return (
    <section aria-labelledby="screenshots-title" className="bg-[#f9fafb] py-12">
      <div className="mx-auto grid max-w-5xl grid-cols-1 items-center gap-8 px-6 md:grid-cols-2">
        <div>
          <h2 id="screenshots-title" className="mb-4 text-2xl font-bold">
            Imagens do app
          </h2>
          <p className="mb-4 text-slate-600">
            Acompanhe cartas guiadas, respiração e narração com música para reduzir a ansiedade.
            Personalize seus cartões, organize seu deck e use mesmo offline.
          </p>
          <ul className="list-disc space-y-2 pl-5 text-slate-700">
            <li>Crie e edite seus próprios cartões.</li>
            <li>Respiração guiada e técnica 5-4-3-2-1.</li>
            <li>Narração com música e vibração opcional.</li>
            <li>Funciona offline e com acessibilidade aprimorada.</li>
          </ul>
        </div>
        <div>
          <Carousel
            images={screenshots}
            maxHeightClass="h-[40vh] sm:h-[45vh] md:h-[60vh]"
            ariaLabel="Galeria de imagens do app"
          />
        </div>
      </div>
    </section>
  )
}
