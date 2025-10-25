import { useEffect, useRef, useState } from 'react'

type ImageItem = {
  src: string
  alt: string
}

type Props = {
  images: ImageItem[]
  /**
   * Altura máxima do carrossel. Use classes Tailwind (ex.: 'h-[50vh] md:h-[60vh]').
   */
  maxHeightClass?: string
  /** Classes adicionais do container do carrossel (fundo, bordas, etc.) */
  containerClass?: string
  ariaLabel?: string
}

// A11y-friendly, responsive carousel without autoplay
export function Carousel({
  images,
  maxHeightClass = 'h-[50vh] md:h-[60vh]',
  containerClass = 'bg-white border border-gray-200 shadow-sm',
  ariaLabel = 'Carrossel de imagens',
}: Props) {
  const [index, setIndex] = useState(0)
  const trackRef = useRef<HTMLDivElement | null>(null)
  const regionRef = useRef<HTMLDivElement | null>(null)

  const goTo = (i: number) => setIndex((i + images.length) % images.length)
  const prev = () => goTo(index - 1)
  const next = () => goTo(index + 1)

  // Keyboard navigation when region focused
  useEffect(() => {
    const el = regionRef.current
    if (!el) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') {
        e.preventDefault()
        prev()
      } else if (e.key === 'ArrowRight') {
        e.preventDefault()
        next()
      }
    }
    el.addEventListener('keydown', onKey)
    return () => el.removeEventListener('keydown', onKey)
  }, [index])

  // Simple touch swipe
  useEffect(() => {
    const el = trackRef.current
    if (!el) return
    let startX = 0
    let deltaX = 0
    const threshold = 40
    const onStart = (e: TouchEvent) => {
      startX = e.touches[0]?.clientX ?? 0
      deltaX = 0
    }
    const onMove = (e: TouchEvent) => {
      deltaX = (e.touches[0]?.clientX ?? 0) - startX
    }
    const onEnd = () => {
      if (Math.abs(deltaX) > threshold) {
        if (deltaX > 0) prev()
        else next()
      }
      startX = 0
      deltaX = 0
    }
    el.addEventListener('touchstart', onStart, { passive: true })
    el.addEventListener('touchmove', onMove, { passive: true })
    el.addEventListener('touchend', onEnd)
    return () => {
      el.removeEventListener('touchstart', onStart)
      el.removeEventListener('touchmove', onMove)
      el.removeEventListener('touchend', onEnd)
    }
  }, [index])

  return (
    <div
      ref={regionRef}
      role="region"
      aria-roledescription="carousel"
      aria-label={ariaLabel}
      tabIndex={0}
      className="group relative mx-auto w-full max-w-5xl"
    >
      {/* Centered window */}
      <div className="relative z-10 flex justify-center">
        <div className={`${maxHeightClass} w-4/5 sm:w-3/4 md:w-2/5 overflow-hidden rounded-xl ${containerClass}`}>
          <div
            ref={trackRef}
            className="flex h-full w-full transition-transform duration-300 ease-out"
            style={{ transform: `translateX(-${index * 100}%)` }}
          >
            {images.map((img, i) => (
              <figure key={img.src + i} className="relative h-full w-full shrink-0">
                <img
                  src={img.src}
                  alt={img.alt}
                  loading={i === index ? 'eager' : 'lazy'}
                  className="mx-auto h-full w-auto max-w-full object-contain"
                />
              </figure>
            ))}
          </div>
        </div>
      </div>

      {/* Controls */}
      <button
        type="button"
        aria-label="Anterior"
        onClick={prev}
        className="tap-target absolute left-2 top-1/2 z-20 -translate-y-1/2 rounded-full bg-black/50 p-3 text-white hover:bg-black/70"
      >
        ‹
      </button>
      <button
        type="button"
        aria-label="Próximo"
        onClick={next}
        className="tap-target absolute right-2 top-1/2 z-20 -translate-y-1/2 rounded-full bg-black/50 p-3 text-white hover:bg-black/70"
      >
        ›
      </button>

      {/* Indicators */}
      <div className="mt-3 flex items-center justify-center gap-2">
        {images.map((_, i) => (
          <button
            key={i}
            type="button"
            aria-label={`Ir para o slide ${i + 1}`}
            aria-current={i === index}
            onClick={() => goTo(i)}
            className={`h-2 w-2 rounded-full ${i === index ? 'bg-white' : 'bg-white/40'} focus-visible:outline-accent`}
          />)
        )}
      </div>

      {/* Live region for screen readers */}
      <div aria-live="polite" className="sr-only">{`Slide ${index + 1} de ${images.length}`}</div>
    </div>
  )
}
