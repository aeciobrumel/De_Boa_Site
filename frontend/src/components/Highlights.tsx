export function Highlights() {
  const items = [
    { label: 'Indicado por psicólogos', icon: PsychIcon },
    { label: 'Não medicamentoso', icon: PillOffIcon },
    { label: 'Ajuda no bem estar', icon: MeditateIcon },
  ]
  return (
    <section aria-label="Destaques" className="bg-secondary1 text-black">
      <div className="mx-auto flex max-w-5xl flex-wrap items-center justify-around gap-6 px-6 py-6">
        {items.map(({ label, icon: Icon }) => (
          <div key={label} className="flex flex-col items-center gap-2 text-center">
            <Icon className="h-10 w-10" aria-hidden />
            <span className="font-bold">{label}</span>
          </div>
        ))}
      </div>
    </section>
  )
}

function PsychIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M12 2a7 7 0 0 0-7 7v3H3v4h4v4h4v-4h2l4-4V9a7 7 0 0 0-7-7Z" />
    </svg>
  )
}
function PillOffIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M4.41 3.86 3 5.27 8.73 11 5 14.73a4 4 0 1 0 5.66 5.66L14.39 16l5.2 5.2 1.41-1.41zm7.11 2.83 1.88-1.88a4 4 0 0 1 5.66 5.66L16 12.62z" />
    </svg>
  )
}
function MeditateIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M12 2a2.5 2.5 0 1 1-2.5 2.5A2.5 2.5 0 0 1 12 2Zm-2.9 6.5h5.8l2.4 4.5H15l2 3.5h-3.5V22h-3v-5H7l2-3.5H6.5Z" />
    </svg>
  )
}

