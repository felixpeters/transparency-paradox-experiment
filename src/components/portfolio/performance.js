import React from "react"
import { useMixpanel } from "gatsby-plugin-mixpanel"

function formatCurrency(num) {
  return new Intl.NumberFormat("de-DE", {
    style: "currency",
    currency: "EUR",
  }).format(num)
}

function formatPercentage(num) {
  return new Intl.NumberFormat("de-DE").format(num * 100) + "% p.a."
}

export default function PortfolioPerformance({ strategy, portfolio }) {
  const mixpanel = useMixpanel()
  const investmentHorizon = 10
  const bestReturn = portfolio.return_yearly + portfolio.risk_yearly
  const expectedReturn = portfolio.return_yearly
  const worstReturn = portfolio.return_yearly - portfolio.risk_yearly

  return (
    <div class="max-w-7xl mx-auto my-8 px-4 sm:px-6 lg:px-8">
      <h3 class="text-2xl leading-6 font-medium text-gray-900">
        Prognose Ihrer Wertanlage
      </h3>
      <div class="mt-1 flex flex-col lg:flex-row">
        <span class="flex-1 text-sm font-medium text-gray-500">
          Einmaliger Anlagebetrag: {formatCurrency(strategy.investmentAmount)},
          Anlagezeitraum: {investmentHorizon} Jahre (bis 2031)
        </span>
        <a
          href="#"
          onClick={() => mixpanel.track("Open prognosis explanation")}
          class="text-indigo-600 hover:text-indigo-900 text-sm font-medium"
        >
          Wie wurden die Prognosen erstellt?
        </a>
      </div>
      <dl class="mt-4 grid grid-cols-1 rounded-lg bg-white overflow-hidden shadow divide-y divide-gray-200 md:grid-cols-3 md:divide-y-0 md:divide-x">
        <div class="px-4 py-5 sm:p-6">
          <dt class="text-base font-normal text-gray-900">Bester Fall</dt>
          <dd class="mt-1 flex justify-between items-baseline md:block lg:flex">
            <div class="flex items-baseline text-2xl font-semibold text-emerald-600">
              {formatCurrency(
                strategy.investmentAmount *
                  Math.pow(1 + bestReturn, investmentHorizon)
              )}
            </div>

            <div class="inline-flex items-baseline px-2.5 py-0.5 rounded-full text-sm font-medium bg-green-100 text-green-800 md:mt-2 lg:mt-0">
              <svg
                class="-ml-1 mr-0.5 flex-shrink-0 self-center h-5 w-5 text-green-500"
                fill="currentColor"
                viewBox="0 0 20 20"
                aria-hidden="true"
              >
                <path
                  fill-rule="evenodd"
                  d="M5.293 9.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 7.414V15a1 1 0 11-2 0V7.414L6.707 9.707a1 1 0 01-1.414 0z"
                  clip-rule="evenodd"
                />
              </svg>
              <span class="sr-only">Increased by</span>
              {formatPercentage(bestReturn)}
            </div>
          </dd>
        </div>

        <div class="px-4 py-5 sm:p-6">
          <dt class="text-base font-normal text-gray-900">Erwarteter Fall</dt>
          <dd class="mt-1 flex justify-between items-baseline md:block lg:flex">
            <div class="flex items-baseline text-2xl font-semibold text-emerald-600">
              {formatCurrency(
                strategy.investmentAmount *
                  Math.pow(1 + expectedReturn, investmentHorizon)
              )}
            </div>

            <div class="inline-flex items-baseline px-2.5 py-0.5 rounded-full text-sm font-medium bg-green-100 text-green-800 md:mt-2 lg:mt-0">
              <svg
                class="-ml-1 mr-0.5 flex-shrink-0 self-center h-5 w-5 text-green-500"
                fill="currentColor"
                viewBox="0 0 20 20"
                aria-hidden="true"
              >
                <path
                  fill-rule="evenodd"
                  d="M5.293 9.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 7.414V15a1 1 0 11-2 0V7.414L6.707 9.707a1 1 0 01-1.414 0z"
                  clip-rule="evenodd"
                />
              </svg>
              <span class="sr-only">Increased by</span>
              {formatPercentage(expectedReturn)}
            </div>
          </dd>
        </div>

        <div class="px-4 py-5 sm:p-6">
          <dt class="text-base font-normal text-gray-900">
            Ungünstigster Fall
          </dt>
          <dd class="mt-1 flex justify-between items-baseline md:block lg:flex">
            <div class="flex items-baseline text-2xl font-semibold text-emerald-600">
              {formatCurrency(
                strategy.investmentAmount *
                  Math.pow(1 + worstReturn, investmentHorizon)
              )}
            </div>

            <div class="inline-flex items-baseline px-2.5 py-0.5 rounded-full text-sm font-medium bg-red-100 text-red-800 md:mt-2 lg:mt-0">
              <svg
                class="-ml-1 mr-0.5 flex-shrink-0 self-center h-5 w-5 text-red-500"
                fill="currentColor"
                viewBox="0 0 20 20"
                aria-hidden="true"
              >
                <path
                  fill-rule="evenodd"
                  d="M14.707 10.293a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 111.414-1.414L9 12.586V5a1 1 0 012 0v7.586l2.293-2.293a1 1 0 011.414 0z"
                  clip-rule="evenodd"
                />
              </svg>
              <span class="sr-only">Decreased by</span>
              {formatPercentage(worstReturn)}
            </div>
          </dd>
        </div>
      </dl>
    </div>
  )
}
