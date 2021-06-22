import React from "react"
import { useMixpanel } from "gatsby-plugin-mixpanel"

function formatPercentage(num) {
  return (
    new Intl.NumberFormat("de-DE", {
      minimumFractionDigits: 2,
    }).format(num * 100) + "%"
  )
}

export default function InvestmentList({ portfolio }) {
  const mixpanel = useMixpanel()
  return (
    <div class="max-w-7xl mx-auto my-8 px-4 sm:px-6 lg:px-8">
      <h3 class="text-2xl leading-6 font-medium text-gray-900">
        Ihr Portfolio im Detail
      </h3>
      <div class="mt-1 flex flex-col lg:flex-row">
        <span class="flex-1 text-sm font-medium text-gray-500">
          Folgende Fonds werden in Ihr Portfolio aufgenommen.
        </span>
        <a
          href="#"
          onClick={() => mixpanel.track("Open prognosis explanation")}
          class="text-indigo-600 hover:text-indigo-900 text-sm font-medium"
        >
          Warum wurden diese Fonds ausgewählt?
        </a>
      </div>
      <div class="flex flex-col mt-4">
        <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
            <div class="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
              <table class="min-w-full divide-y divide-gray-200">
                <thead class="bg-gray-50">
                  <tr>
                    <th
                      scope="col"
                      class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Name und Typ des Fonds
                    </th>
                    <th
                      scope="col"
                      class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Jährliche Kosten
                    </th>
                    <th
                      scope="col"
                      class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Jährliche Rendite im besten Fall
                    </th>
                    <th
                      scope="col"
                      class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Jährliche Rendite im erwarteten Fall
                    </th>
                    <th
                      scope="col"
                      class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Jährliche Rendite im ungünstigsten Fall
                    </th>
                    <th
                      scope="col"
                      class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Gewichtung
                    </th>
                  </tr>
                </thead>
                <tbody class="bg-white divide-y divide-gray-200">
                  {portfolio.fonds
                    .sort((etf1, etf2) => etf2.weight - etf1.weight)
                    .map(etf => (
                      <tr>
                        <td class="px-6 py-4">
                          <div class="flex flex-col">
                            <div class="text-sm font-medium text-gray-900">
                              {etf.name}
                            </div>
                            <div class="text-sm text-gray-500">{etf.type}</div>
                          </div>
                        </td>
                        <td class="px-6 py-4 whitespace-nowrap">
                          <div class="text-sm text-gray-900">
                            {formatPercentage(etf.cost_yearly)}
                          </div>
                        </td>
                        <td class="px-6 py-4 whitespace-nowrap">
                          {etf.return_yearly + etf.risk_yearly >= 0 && (
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
                              {formatPercentage(
                                etf.return_yearly + etf.risk_yearly
                              )}
                            </div>
                          )}
                          {etf.return_yearly + etf.risk_yearly < 0 && (
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
                              {formatPercentage(
                                etf.return_yearly + etf.risk_yearly
                              )}
                            </div>
                          )}
                        </td>
                        <td class="px-6 py-4 whitespace-nowrap">
                          {etf.return_yearly >= 0 && (
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
                              {formatPercentage(etf.return_yearly)}
                            </div>
                          )}
                          {etf.return_yearly < 0 && (
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
                              {formatPercentage(etf.return_yearly)}
                            </div>
                          )}
                        </td>
                        <td class="px-6 py-4 whitespace-nowrap">
                          {etf.return_yearly - etf.risk_yearly >= 0 && (
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
                              {formatPercentage(
                                etf.return_yearly - etf.risk_yearly
                              )}
                            </div>
                          )}
                          {etf.return_yearly - etf.risk_yearly < 0 && (
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
                              {formatPercentage(
                                etf.return_yearly - etf.risk_yearly
                              )}
                            </div>
                          )}
                        </td>
                        <td class="px-6 py-4 whitespace-nowrap">
                          <div class="text-sm text-gray-900">
                            {formatPercentage(etf.weight)}
                          </div>
                        </td>
                      </tr>
                    ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
