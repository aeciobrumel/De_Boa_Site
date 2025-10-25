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
    <section aria-labelledby="screenshots-title" className="py-12">
      <div className="mx-auto max-w-5xl px-6">
        <h2 id="screenshots-title" className="mb-6 text-2xl font-bold">
          Imagens do app
        </h2>
        <Carousel images={screenshots} aspect="portrait" ariaLabel="Galeria de imagens do app" />
      </div>
    </section>
  )
}

