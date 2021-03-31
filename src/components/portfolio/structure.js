import React from "react"

export default function PortfolioStructure() {
  return (
    <div class="max-w-7xl mx-auto my-8 px-4 sm:px-6 lg:px-8">
      <h3 class="text-2xl leading-6 font-medium text-gray-900">
        Anlagestruktur
      </h3>
      <div class="mt-1 flex flex-col lg:flex-row">
        <span class="flex-1 text-sm font-medium text-gray-500">
          Unsere KI erstellt weltweit diversifizierte Portfolios basierend auf
          Ihren Angaben.
        </span>
        <a
          href="#"
          class="text-indigo-600 hover:text-indigo-900 text-sm font-medium"
        >
          Warum wurde diese Anlagestruktur gewählt?
        </a>
      </div>
      <div class="mt-4 rounded-lg bg-white overflow-hidden shadow">
        <div class="lg:grid lg:grid-cols-2 lg:gap-2">
          <div class="p-4">
            <img src={"/structure_1.png"} />
          </div>
          <div class="p-4">
            <img src={"/structure_2.png"} />
          </div>
        </div>
      </div>
    </div>
  )
}
