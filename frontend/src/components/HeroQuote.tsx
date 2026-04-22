export function HeroQuote() {
  return (
    <section className="border-y border-[#cfe0f3] bg-[#e8f3fb] py-4 sm:py-8">
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-center px-6 text-center">
         <div className="flex h-5 w-5 items-center justify-center rounded-full border-2 border-primary sm:h-7 sm:w-7">
          <img
            src="/img/quotes.svg"
            alt=""
            aria-hidden="true"
            className="h-4 w-4 sm:h-[1.25rem] sm:w-[1.25rem]"
          />
        </div>
        <p className="mx-auto mt-1.5 max-w-[44rem] text-[10px] leading-4 text-primary sm:mt-3 sm:text-base sm:leading-8">
          "O Dboa organiza respiração guiada, cartões de enfrentamento e narração em uma tela
          simples para ajudar você a atravessar o pico de ansiedade com menos sobrecarga."
        </p>
        <p className="mt-2 text-[10px] font-semibold tracking-[0.08em] text-primary sm:mt-5 sm:text-base">
          @aecio_brumel
        </p>
      </div>
    </section>
  )
}
