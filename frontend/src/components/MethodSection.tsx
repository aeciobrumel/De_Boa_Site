const steps = [
  {
    title: 'Monte seu apoio antes da crise',
    description: 'Prepare seus cartões quando estiver calmo.',
  },
  {
    title: 'Use o app no momento difícil',
    description: 'Siga respiração, grounding e cartões.',
  },
  {
    title: 'Use frases que funcionam para você',
    description: 'Use frases na sua linguagem.',
  },
]

export function MethodSection() {
  return (
    <section
      aria-labelledby="metodo-title"
      className="border-t border-[#dde4f1] bg-[#f5f7fb] py-5 sm:py-10"
    >
      <div className="mx-auto max-w-5xl px-6">
        <div className="hidden sm:block">
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-secondary2">
            Cartões de apoio na crise
          </p>
          <h2
            id="metodo-title-desktop"
            className="mt-2 text-2xl font-bold leading-tight text-primary md:text-3xl"
          >
            Siga um passo a passo claro na hora difícil.
          </h2>

          <ol className="mt-5 grid gap-4 md:grid-cols-3">
            {steps.map((step, index) => (
              <li
                key={step.title}
                className="rounded-2xl border border-[#d5dceb] bg-white p-5 shadow-sm"
              >
                <span className="inline-flex h-7 min-w-7 items-center justify-center rounded-full bg-primary px-2 text-xs font-bold text-white">
                  {index + 1}
                </span>
                <h3 className="mt-3 text-base font-bold leading-tight text-primary">{step.title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-700">{step.description}</p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  )
}
