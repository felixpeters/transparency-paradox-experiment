import React from "react"

function formatCurrency(num) {
  return new Intl.NumberFormat("de-DE", {
    style: "currency",
    currency: "EUR",
  }).format(num)
}

function formatPercentage(num) {
  return new Intl.NumberFormat("de-DE").format(num) + "%"
}

export default function PortfolioOverview({ strategy }) {
  return (
    <div class="max-w-7xl mx-auto my-8 px-4 sm:px-6 lg:px-8">
      <h3 class="text-2xl leading-6 font-medium text-gray-900">
        Anlagestrategie
      </h3>
      <div class="mt-1 flex flex-row">
        <span class="flex-1 text-sm font-medium text-gray-500">
          Diese Strategie basiert auf Ihren Angaben.
        </span>
      </div>
      <dl class="mt-4 grid grid-cols-1 gap-5 sm:grid-cols-3">
        <div class="px-4 py-5 bg-white shadow rounded-lg overflow-hidden sm:p-6">
          <dt class="text-sm font-medium text-gray-500 truncate">
            Investmentstrategie
          </dt>
          <dd class="mt-1 text-3xl font-semibold text-gray-900">
            {strategy.investmentStrategy}
          </dd>
        </div>

        <div class="px-4 py-5 bg-white shadow rounded-lg overflow-hidden sm:p-6">
          <dt class="text-sm font-medium text-gray-500 truncate">
            Risikoanteil
          </dt>
          <dd class="mt-1 text-3xl font-semibold text-gray-900">
            {formatPercentage(strategy.riskShare)}
          </dd>
        </div>

        <div class="px-4 py-5 bg-white shadow rounded-lg overflow-hidden sm:p-6">
          <dt class="text-sm font-medium text-gray-500 truncate">
            Anlagebetrag
          </dt>
          <dd class="mt-1 text-3xl font-semibold text-gray-900">
            {formatCurrency(strategy.investmentAmount)}
          </dd>
        </div>
      </dl>
    </div>
  )
}
