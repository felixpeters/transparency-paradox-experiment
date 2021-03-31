import React from "react"
import { useMixpanel } from "gatsby-plugin-mixpanel"

export default function InvestmentList() {
  const mixpanel = useMixpanel()
  return (
    <div class="max-w-7xl mx-auto my-8 px-4 sm:px-6 lg:px-8">
      <h3 class="text-2xl leading-6 font-medium text-gray-900">
        Ihr Portfolio im Detail
      </h3>
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
                      Name des Fonds
                    </th>
                    <th
                      scope="col"
                      class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Zugrunde liegender Index
                    </th>
                    <th
                      scope="col"
                      class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Rendite im erwarteten Fall
                    </th>
                    <th
                      scope="col"
                      class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Gewichtung
                    </th>
                    <th scope="col" class="relative px-6 py-3">
                      <span class="sr-only">Explain</span>
                    </th>
                  </tr>
                </thead>
                <tbody class="bg-white divide-y divide-gray-200">
                  <tr>
                    <td class="px-6 py-4 whitespace-nowrap">
                      <div class="flex flex-col">
                        <div class="text-sm font-medium text-gray-900">
                          iShares MSCI World ETF
                        </div>
                        <div class="text-sm text-gray-500">
                          iShares by BlackRock
                        </div>
                      </div>
                    </td>
                    <td class="px-6 py-4 whitespace-nowrap">
                      <div class="text-sm text-gray-900">MSCI World</div>
                      <div class="text-sm text-gray-500">Aktienindex</div>
                    </td>
                    <td class="px-6 py-4 whitespace-nowrap">
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
                        7,67%
                      </div>
                    </td>
                    <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-500">
                      50%
                    </td>
                    <td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      <a
                        onClick={() =>
                          mixpanel.track("Open ETF explanation", { etf_idx: 1 })
                        }
                        href="#"
                        class="text-indigo-600 hover:text-indigo-900"
                      >
                        Warum wurde dieser ETF ausgewählt?
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td class="px-6 py-4 whitespace-nowrap">
                      <div class="flex flex-col">
                        <div class="text-sm font-medium text-gray-900">
                          Vanguard Total World Bond ETF
                        </div>
                        <div class="text-sm text-gray-500">Vanguard</div>
                      </div>
                    </td>
                    <td class="px-6 py-4 whitespace-nowrap">
                      <div class="text-sm text-gray-900">
                        Global Aggregate Composite Index
                      </div>
                      <div class="text-sm text-gray-500">Anleihenindex</div>
                    </td>
                    <td class="px-6 py-4 whitespace-nowrap">
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
                        4,45%
                      </div>
                    </td>
                    <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-500">
                      25%
                    </td>
                    <td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      <a
                        onClick={() =>
                          mixpanel.track("Open ETF explanation", { etf_idx: 2 })
                        }
                        href="#"
                        class="text-indigo-600 hover:text-indigo-900"
                      >
                        Warum wurde dieser ETF ausgewählt?
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td class="px-6 py-4 whitespace-nowrap">
                      <div class="flex flex-col">
                        <div class="text-sm font-medium text-gray-900">
                          MSCI Emerging Markets UCITS ETF
                        </div>
                        <div class="text-sm text-gray-500">Xtrackers</div>
                      </div>
                    </td>
                    <td class="px-6 py-4 whitespace-nowrap">
                      <div class="text-sm text-gray-900">
                        MSCI Emerging Markets
                      </div>
                      <div class="text-sm text-gray-500">Aktienindex</div>
                    </td>
                    <td class="px-6 py-4 whitespace-nowrap">
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
                        3,95%
                      </div>
                    </td>
                    <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-500">
                      15%
                    </td>
                    <td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      <a
                        onClick={() =>
                          mixpanel.track("Open ETF explanation", { etf_idx: 3 })
                        }
                        href="#"
                        class="text-indigo-600 hover:text-indigo-900"
                      >
                        Warum wurde dieser ETF ausgewählt?
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td class="px-6 py-4 whitespace-nowrap">
                      <div class="flex flex-col">
                        <div class="text-sm font-medium text-gray-900">
                          iShares Global Clean Energy ETF
                        </div>
                        <div class="text-sm text-gray-500">
                          iShares by BlackRock
                        </div>
                      </div>
                    </td>
                    <td class="px-6 py-4 whitespace-nowrap">
                      <div class="text-sm text-gray-900">
                        S&P Global Clean Energy Index
                      </div>
                      <div class="text-sm text-gray-500">Aktienindex</div>
                    </td>
                    <td class="px-6 py-4 whitespace-nowrap">
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
                        9,87%
                      </div>
                    </td>
                    <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-500">
                      5%
                    </td>
                    <td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      <a
                        onClick={() =>
                          mixpanel.track("Open ETF explanation", { etf_idx: 4 })
                        }
                        href="#"
                        class="text-indigo-600 hover:text-indigo-900"
                      >
                        Warum wurde dieser ETF ausgewählt?
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td class="px-6 py-4 whitespace-nowrap">
                      <div class="flex flex-col">
                        <div class="text-sm font-medium text-gray-900">
                          iShares Global REIT ETF
                        </div>
                        <div class="text-sm text-gray-500">
                          iShares by BlackRock
                        </div>
                      </div>
                    </td>
                    <td class="px-6 py-4 whitespace-nowrap">
                      <div class="text-sm text-gray-900">
                        FTSE EPRA Nareit Global REITS
                      </div>
                      <div class="text-sm text-gray-500">Immobilienindex</div>
                    </td>
                    <td class="px-6 py-4 whitespace-nowrap">
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
                        2,92%
                      </div>
                    </td>
                    <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-500">
                      5%
                    </td>
                    <td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      <a
                        onClick={() =>
                          mixpanel.track("Open ETF explanation", { etf_idx: 5 })
                        }
                        href="#"
                        class="text-indigo-600 hover:text-indigo-900"
                      >
                        Warum wurde dieser ETF ausgewählt?
                      </a>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
