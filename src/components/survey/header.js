import React from "react"

export default function SurveyHeader() {
  return (
    <div class="mt-16 mx-auto max-w-7xl px-4 sm:mt-24">
      <div class="text-center">
        <h1 class="text-4xl tracking-tight font-bold text-gray-900 sm:text-3xl md:text-4xl">
          <span class="block xl:inline">Welches Portfolio passt zu Ihnen?</span>
          <br />
          <span class="block text-emerald-600 xl:inline">
            Unser Anlageassistent hilft Ihnen, das herauszufinden.
          </span>
        </h1>
        <p class="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
          Bitte beantworten Sie die nachfolgenden Fragen und erhalten Sie einen
          unverbindlichen Vorschlag für Ihr individuelles Portfolio.
        </p>
      </div>
    </div>
  )
}
