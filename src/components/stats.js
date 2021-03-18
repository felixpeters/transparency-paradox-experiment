import React from "react"

export default function Stats() {
  return (
    <div class="bg-emerald-800">
      <div class="max-w-7xl mx-auto py-12 px-4 sm:py-16 sm:px-6 lg:px-8 lg:py-20">
        <div class="max-w-4xl mx-auto text-center">
          <h2 class="text-3xl font-extrabold text-white sm:text-4xl">
            Risikosteuerung mit modernster KI-Technologie
          </h2>
          <p class="mt-3 text-xl text-emerald-200 sm:mt-4">
            Unsere Algorithmen überwachen Ihr Portfolio in Echtzeit. Dabei
            simulieren wir unzählige Szenarien, um die zukünftige Performance
            Ihres Portfolios möglichst genau prognostizieren zu können.
          </p>
        </div>
        <dl class="mt-10 text-center sm:max-w-3xl sm:mx-auto sm:grid sm:grid-cols-3 sm:gap-8">
          <div class="flex flex-col">
            <dt class="order-2 mt-2 text-lg leading-6 font-medium text-emerald-200">
              Beobachtete Wertpapiere
            </dt>
            <dd class="order-1 text-5xl font-extrabold text-white">7.300+</dd>
          </div>
          <div class="flex flex-col mt-10 sm:mt-0">
            <dt class="order-2 mt-2 text-lg leading-6 font-medium text-emerald-200">
              Externe Datenquellen
            </dt>
            <dd class="order-1 text-5xl font-extrabold text-white">300+</dd>
          </div>
          <div class="flex flex-col mt-10 sm:mt-0">
            <dt class="order-2 mt-2 text-lg leading-6 font-medium text-emerald-200">
              Überwachende KI-Modelle
            </dt>
            <dd class="order-1 text-5xl font-extrabold text-white">1.000+</dd>
          </div>
        </dl>
      </div>
    </div>
  )
}
