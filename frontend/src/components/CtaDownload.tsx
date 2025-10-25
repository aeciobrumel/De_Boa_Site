import { ANDROID_URL } from '../config'

export function CtaDownload() {
  return (
    <section id="download" className="bg-surface py-12">
      <div className="mx-auto max-w-5xl px-6 text-center">
        <h2 className="text-2xl font-bold">Pronto para respirar melhor?</h2>
        <p className="mt-2 text-secondary1/90">Baixe e tenha suporte prático sempre à mão.</p>
        <div className="mt-6">
          {/* TODO: {{ANDROID_URL}} se necessário */}
          <a
            className="tap-target rounded-full bg-primary px-6 py-3 font-semibold text-white hover:opacity-95"
            href={ANDROID_URL}
            target="_blank"
            rel="noopener noreferrer"
          >
            Baixar para Android
          </a>
        </div>
      </div>
    </section>
  )
}

