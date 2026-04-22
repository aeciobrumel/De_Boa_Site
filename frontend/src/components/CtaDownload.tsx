import { ANDROID_URL } from '../config'

export function CtaDownload() {
  return (
    <section id="download" className="border-t border-[#dde4f1] bg-primary py-8 sm:bg-secondary1 sm:py-14">
      <div className="mx-auto max-w-5xl px-6 text-center">
        <h2 className="text-lg font-bold leading-tight text-white sm:text-3xl">
          Tenha seu plano de enfrentamento no bolso.
        </h2>
        <p className="mx-auto mt-2 max-w-[32ch] text-xs leading-5 text-white/85 sm:mt-3 sm:max-w-none sm:text-lg sm:leading-8">
          Se a proposta fizer sentido para você, baixe o app e comece montando seus cartões com
          calma antes do próximo momento difícil.
        </p>
        <div className="mt-4 sm:mt-6">
          <a
            className="tap-target inline-flex h-9 items-center justify-center rounded-full bg-white px-4 text-xs font-semibold text-secondary1 hover:opacity-95 sm:h-auto sm:px-6 sm:py-3 sm:text-base"
            href={ANDROID_URL}
            target="_blank"
            rel="noopener noreferrer"
          >
            Baixar para Android
          </a>
        </div>
        <p className="mt-3 text-[0.65rem] text-white/75 sm:mt-4 sm:text-sm">
          O app não substitui acompanhamento médico ou psicológico.
        </p>
      </div>
    </section>
  )
}
