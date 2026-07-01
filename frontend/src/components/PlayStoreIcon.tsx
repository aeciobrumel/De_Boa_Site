type PlayStoreIconProps = {
  className?: string
  monochrome?: boolean
}

export function PlayStoreIcon({
  className = 'h-5 w-5',
  monochrome = false,
}: PlayStoreIconProps) {
  const colors = monochrome
    ? ['currentColor', 'currentColor', 'currentColor', 'currentColor']
    : ['#00d7fe', '#00f076', '#ffcd00', '#f63448']

  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      role="img"
      aria-label="Google Play"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path fill={colors[0]} d="M3.2 2.4 14 12 3.2 21.6a2 2 0 0 1-.7-1.5V3.9a2 2 0 0 1 .7-1.5Z" />
      <path fill={colors[1]} d="m14 12 3-2.7L5.5 2.7A2 2 0 0 0 3.2 2.4Z" />
      <path fill={colors[2]} d="m14 12 3 2.7-11.5 6.6a2 2 0 0 1-2.3.3Z" />
      <path
        fill={colors[3]}
        d="m17 9.3 3.5 2a.8.8 0 0 1 0 1.4l-3.5 2-3-2.7Z"
      />
    </svg>
  )
}
