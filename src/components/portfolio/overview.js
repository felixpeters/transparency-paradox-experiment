import React from "react"

export default function PortfolioOverview() {
  return (
    <div class="max-w-7xl mx-auto my-8 px-4 sm:px-6 lg:px-8">
      <h3 class="text-xl leading-6 font-medium text-gray-900">
        Anlagestrategie
      </h3>
      <dl class="mt-4 grid grid-cols-1 gap-5 sm:grid-cols-3">
        <div class="px-4 py-5 bg-white shadow rounded-lg overflow-hidden sm:p-6">
          <dt class="text-sm font-medium text-gray-500 truncate">Ziel</dt>
          <dd class="mt-1 text-3xl font-semibold text-gray-900">
            Rendite erzielen
          </dd>
        </div>

        <div class="px-4 py-5 bg-white shadow rounded-lg overflow-hidden sm:p-6">
          <dt class="text-sm font-medium text-gray-500 truncate">
            Einmalige Einzahlung
          </dt>
          <dd class="mt-1 text-3xl font-semibold text-gray-900">10.000€</dd>
        </div>

        <div class="px-4 py-5 bg-white shadow rounded-lg overflow-hidden sm:p-6">
          <dt class="text-sm font-medium text-gray-500 truncate">
            Monatliche Einzahlung
          </dt>
          <dd class="mt-1 text-3xl font-semibold text-gray-900">250€</dd>
        </div>
      </dl>
    </div>
  )
}
