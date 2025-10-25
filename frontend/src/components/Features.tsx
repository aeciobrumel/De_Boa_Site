export function Features() {
  const features = [
    { title: 'Respiração guiada', icon: InfoIcon },
    { title: 'Técnica 5-4-3-2-1', icon: ListIcon },
    { title: 'Afirmações', icon: CircleIcon },
    { title: 'Narração + música', icon: ArrowsIcon },
    { title: 'Vibração/Haptics', icon: LinesIcon },
    { title: 'Modo offline', icon: DeviceIcon },
    { title: 'Acessibilidade', icon: A11yIcon },
  ]
  return (
    <section aria-labelledby="recursos-title" className="py-12">
      <div className="mx-auto max-w-5xl px-6">
        <h2 id="recursos-title" className="mb-6 text-2xl font-bold">
          Recursos do app
        </h2>
        <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
          {features.map(({ title, icon: Icon }) => (
            <li
              key={title}
              className="flex items-center gap-3 rounded-xl border border-gray-200 bg-white p-4"
            >
              <Icon className="h-6 w-6 text-secondary1" aria-hidden />
              <span>{title}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

function InfoIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M12 2a10 10 0 1 0 10 10A10.011 10.011 0 0 0 12 2Zm1 14h-2v-2h2Zm0-4h-2V6h2Z" />
    </svg>
  )
}
function ListIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M3 11h18v2H3zM7 5h10v2H7zm0 12h10v2H7z" />
    </svg>
  )
}
function CircleIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M12 17a5 5 0 1 1 5-5a5.006 5.006 0 0 1-5 5m0-14a9 9 0 1 0 9 9a9.01 9.01 0 0 0-9-9" />
    </svg>
  )
}
function ArrowsIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M12 3l4 4H8zm0 18l-4-4h8zM3 12l4-4v8zM21 12l-4 4V8z" />
    </svg>
  )
}
function LinesIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M7 2h10v2H7zm-2 4h14v2H5zm-2 4h18v2H3zm2 4h14v2H5zm2 4h10v2H7z" />
    </svg>
  )
}
function DeviceIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M4 5h16v14H4zM2 3v18h20V3zm6 4h8v10H8z" />
    </svg>
  )
}
function A11yIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M12 4a8 8 0 0 0-8 8h2a6 6 0 1 1 6 6v2a8 8 0 0 0 0-16z" />
    </svg>
  )
}
