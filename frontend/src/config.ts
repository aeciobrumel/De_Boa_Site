// Conteúdo dinâmico: URLs e IDs
// TODO: Atualize com os links reais fornecidos
export const ANDROID_URL =
  'https://play.google.com/store/apps/details?id=com.dboa.dboa' // TODO: {{ANDROID_URL}}

export const YOUTUBE_URL = 'https://www.youtube.com/watch?v=iBRxq5Pqt_k' // TODO: {{YOUTUBE_URL}}

export function extractYouTubeId(url: string): string | null {
  try {
    const u = new URL(url)
    if (u.hostname.includes('youtu.be')) return u.pathname.replace('/', '') || null
    if (u.searchParams.get('v')) return u.searchParams.get('v')
    // Fallback básico para /embed/VIDEO_ID
    const parts = u.pathname.split('/').filter(Boolean)
    const embedIndex = parts.findIndex((p) => p === 'embed')
    if (embedIndex !== -1 && parts[embedIndex + 1]) return parts[embedIndex + 1]
    return null
  } catch {
    return null
  }
}

export const YOUTUBE_ID = extractYouTubeId(YOUTUBE_URL) || 'iBRxq5Pqt_k'

