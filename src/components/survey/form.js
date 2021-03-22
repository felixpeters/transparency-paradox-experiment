import React from "react"
import { useMixpanel } from "gatsby-plugin-mixpanel"
import { navigate } from "gatsby"

export default function SurveyForm() {
  const mixpanel = useMixpanel()
  return (
    <div class="max-w-7xl mx-auto my-4 px-4 sm:px-6 lg:px-8">
      <div class="bg-white overflow-hidden shadow rounded-lg">
        <div class="px-4 py-5 sm:p-6">
          <form
            onSubmit={event => {
              event.preventDefault()
              navigate("/portfolio")
            }}
            class="space-y-8 divide-y divide-gray-200"
          >
            <div class="space-y-8 divide-y divide-gray-200 sm:space-y-5">
              <div>
                <div>
                  <h3 class="text-lg leading-6 font-medium text-gray-900">
                    Risikobereitschaft & Anlegermentalität
                  </h3>
                  <p class="mt-1 max-w-2xl text-sm text-gray-500">
                    Bitte geben Sie an, inwieweit Sie den folgenden Aussagen
                    zustimmen.
                  </p>
                </div>

                <div class="mt-6 sm:mt-5 space-y-6 sm:space-y-5">
                  <div class="sm:grid sm:grid-cols-2 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
                    <label
                      for="return-affinity"
                      class="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
                    >
                      Bei meiner Geldanlage achte ich vorrangig auf Rendite.
                    </label>
                    <div class="mt-1 sm:mt-0">
                      <fieldset>
                        <legend id="return-affinity" class="sr-only">
                          Return affinity
                        </legend>
                        <ul
                          class="space-y-4"
                          role="radiogroup"
                          aria-labelledby="investment-goal"
                        >
                          <li
                            id="return-affinity-0"
                            tabindex="0"
                            role="radio"
                            aria-checked="true"
                            class="group relative bg-white rounded-lg shadow-sm cursor-pointer focus:outline-none focus:ring-1 focus:ring-offset-2 focus:ring-emerald-500"
                          >
                            <div class="rounded-lg border border-gray-300 bg-white px-6 py-4 hover:border-gray-400 sm:flex sm:justify-between">
                              <div class="text-sm">
                                <p class="font-medium text-gray-900">
                                  Stimme ich gar nicht zu.
                                </p>
                              </div>
                            </div>
                            <div
                              class="border-emerald-500 absolute inset-0 rounded-lg border-2 pointer-events-none"
                              aria-hidden="true"
                            ></div>
                          </li>

                          <li
                            id="return-affinity-1"
                            tabindex="-1"
                            role="radio"
                            aria-checked="false"
                            class="group relative bg-white rounded-lg shadow-sm cursor-pointer focus:outline-none focus:ring-1 focus:ring-offset-2 focus:ring-emerald-500"
                          >
                            <div class="rounded-lg border border-gray-300 bg-white px-6 py-4 hover:border-gray-400 sm:flex sm:justify-between">
                              <div class="text-sm">
                                <p class="font-medium text-gray-900">
                                  Stimme ich teilweise zu.
                                </p>
                              </div>
                            </div>
                            <div
                              class="border-transparent absolute inset-0 rounded-lg border-2 pointer-events-none"
                              aria-hidden="true"
                            ></div>
                          </li>

                          <li
                            id="return-affinity-2"
                            tabindex="-1"
                            role="radio"
                            aria-checked="false"
                            class="group relative bg-white rounded-lg shadow-sm cursor-pointer focus:outline-none focus:ring-1 focus:ring-offset-2 focus:ring-emerald-500"
                          >
                            <div class="rounded-lg border border-gray-300 bg-white px-6 py-4 hover:border-gray-400 sm:flex sm:justify-between">
                              <div class="text-sm">
                                <p class="font-medium text-gray-900">
                                  Stimme ich überwiegend zu.
                                </p>
                              </div>
                            </div>

                            <div
                              class="border-transparent absolute inset-0 rounded-lg border-2 pointer-events-none"
                              aria-hidden="true"
                            ></div>
                          </li>

                          <li
                            id="return-affinity-3"
                            tabindex="-1"
                            role="radio"
                            aria-checked="false"
                            class="group relative bg-white rounded-lg shadow-sm cursor-pointer focus:outline-none focus:ring-1 focus:ring-offset-2 focus:ring-emerald-500"
                          >
                            <div class="rounded-lg border border-gray-300 bg-white px-6 py-4 hover:border-gray-400 sm:flex sm:justify-between">
                              <div class="text-sm">
                                <p class="font-medium text-gray-900">
                                  Stimme ich voll zu.
                                </p>
                              </div>
                            </div>

                            <div
                              class="border-transparent absolute inset-0 rounded-lg border-2 pointer-events-none"
                              aria-hidden="true"
                            ></div>
                          </li>
                        </ul>
                      </fieldset>
                    </div>
                  </div>
                  <div class="sm:grid sm:grid-cols-2 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
                    <label
                      for="loss-fear"
                      class="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
                    >
                      Die Gefahr einen Teil meines Vermögens zu verlieren,
                      belastet mich stark.
                    </label>
                    <div class="mt-1 sm:mt-0">
                      <fieldset>
                        <legend id="loss-fear" class="sr-only">
                          Loss fear
                        </legend>
                        <ul
                          class="space-y-4"
                          role="radiogroup"
                          aria-labelledby="investment-goal"
                        >
                          <li
                            id="loss-fear-0"
                            tabindex="0"
                            role="radio"
                            aria-checked="true"
                            class="group relative bg-white rounded-lg shadow-sm cursor-pointer focus:outline-none focus:ring-1 focus:ring-offset-2 focus:ring-emerald-500"
                          >
                            <div class="rounded-lg border border-gray-300 bg-white px-6 py-4 hover:border-gray-400 sm:flex sm:justify-between">
                              <div class="text-sm">
                                <p class="font-medium text-gray-900">
                                  Stimme ich gar nicht zu.
                                </p>
                              </div>
                            </div>
                            <div
                              class="border-emerald-500 absolute inset-0 rounded-lg border-2 pointer-events-none"
                              aria-hidden="true"
                            ></div>
                          </li>

                          <li
                            id="loss-fear-1"
                            tabindex="-1"
                            role="radio"
                            aria-checked="false"
                            class="group relative bg-white rounded-lg shadow-sm cursor-pointer focus:outline-none focus:ring-1 focus:ring-offset-2 focus:ring-emerald-500"
                          >
                            <div class="rounded-lg border border-gray-300 bg-white px-6 py-4 hover:border-gray-400 sm:flex sm:justify-between">
                              <div class="text-sm">
                                <p class="font-medium text-gray-900">
                                  Stimme ich teilweise zu.
                                </p>
                              </div>
                            </div>
                            <div
                              class="border-transparent absolute inset-0 rounded-lg border-2 pointer-events-none"
                              aria-hidden="true"
                            ></div>
                          </li>

                          <li
                            id="loss-fear-2"
                            tabindex="-1"
                            role="radio"
                            aria-checked="false"
                            class="group relative bg-white rounded-lg shadow-sm cursor-pointer focus:outline-none focus:ring-1 focus:ring-offset-2 focus:ring-emerald-500"
                          >
                            <div class="rounded-lg border border-gray-300 bg-white px-6 py-4 hover:border-gray-400 sm:flex sm:justify-between">
                              <div class="text-sm">
                                <p class="font-medium text-gray-900">
                                  Stimme ich überwiegend zu.
                                </p>
                              </div>
                            </div>

                            <div
                              class="border-transparent absolute inset-0 rounded-lg border-2 pointer-events-none"
                              aria-hidden="true"
                            ></div>
                          </li>

                          <li
                            id="loss-fear-3"
                            tabindex="-1"
                            role="radio"
                            aria-checked="false"
                            class="group relative bg-white rounded-lg shadow-sm cursor-pointer focus:outline-none focus:ring-1 focus:ring-offset-2 focus:ring-emerald-500"
                          >
                            <div class="rounded-lg border border-gray-300 bg-white px-6 py-4 hover:border-gray-400 sm:flex sm:justify-between">
                              <div class="text-sm">
                                <p class="font-medium text-gray-900">
                                  Stimme ich voll zu.
                                </p>
                              </div>
                            </div>

                            <div
                              class="border-transparent absolute inset-0 rounded-lg border-2 pointer-events-none"
                              aria-hidden="true"
                            ></div>
                          </li>
                        </ul>
                      </fieldset>
                    </div>
                  </div>
                  <div class="sm:grid sm:grid-cols-2 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
                    <label
                      for="security-affinity"
                      class="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
                    >
                      Die Sicherheit einer Geldanlage ist mir am
                      allerwichtigsten.
                    </label>
                    <div class="mt-1 sm:mt-0">
                      <fieldset>
                        <legend id="security-affinity" class="sr-only">
                          Loss fear
                        </legend>
                        <ul
                          class="space-y-4"
                          role="radiogroup"
                          aria-labelledby="investment-goal"
                        >
                          <li
                            id="security-affinity-0"
                            tabindex="0"
                            role="radio"
                            aria-checked="true"
                            class="group relative bg-white rounded-lg shadow-sm cursor-pointer focus:outline-none focus:ring-1 focus:ring-offset-2 focus:ring-emerald-500"
                          >
                            <div class="rounded-lg border border-gray-300 bg-white px-6 py-4 hover:border-gray-400 sm:flex sm:justify-between">
                              <div class="text-sm">
                                <p class="font-medium text-gray-900">
                                  Stimme ich gar nicht zu.
                                </p>
                              </div>
                            </div>
                            <div
                              class="border-emerald-500 absolute inset-0 rounded-lg border-2 pointer-events-none"
                              aria-hidden="true"
                            ></div>
                          </li>

                          <li
                            id="security-affinity-1"
                            tabindex="-1"
                            role="radio"
                            aria-checked="false"
                            class="group relative bg-white rounded-lg shadow-sm cursor-pointer focus:outline-none focus:ring-1 focus:ring-offset-2 focus:ring-emerald-500"
                          >
                            <div class="rounded-lg border border-gray-300 bg-white px-6 py-4 hover:border-gray-400 sm:flex sm:justify-between">
                              <div class="text-sm">
                                <p class="font-medium text-gray-900">
                                  Stimme ich teilweise zu.
                                </p>
                              </div>
                            </div>
                            <div
                              class="border-transparent absolute inset-0 rounded-lg border-2 pointer-events-none"
                              aria-hidden="true"
                            ></div>
                          </li>

                          <li
                            id="security-affinity-2"
                            tabindex="-1"
                            role="radio"
                            aria-checked="false"
                            class="group relative bg-white rounded-lg shadow-sm cursor-pointer focus:outline-none focus:ring-1 focus:ring-offset-2 focus:ring-emerald-500"
                          >
                            <div class="rounded-lg border border-gray-300 bg-white px-6 py-4 hover:border-gray-400 sm:flex sm:justify-between">
                              <div class="text-sm">
                                <p class="font-medium text-gray-900">
                                  Stimme ich überwiegend zu.
                                </p>
                              </div>
                            </div>

                            <div
                              class="border-transparent absolute inset-0 rounded-lg border-2 pointer-events-none"
                              aria-hidden="true"
                            ></div>
                          </li>

                          <li
                            id="security-affinity-3"
                            tabindex="-1"
                            role="radio"
                            aria-checked="false"
                            class="group relative bg-white rounded-lg shadow-sm cursor-pointer focus:outline-none focus:ring-1 focus:ring-offset-2 focus:ring-emerald-500"
                          >
                            <div class="rounded-lg border border-gray-300 bg-white px-6 py-4 hover:border-gray-400 sm:flex sm:justify-between">
                              <div class="text-sm">
                                <p class="font-medium text-gray-900">
                                  Stimme ich voll zu.
                                </p>
                              </div>
                            </div>

                            <div
                              class="border-transparent absolute inset-0 rounded-lg border-2 pointer-events-none"
                              aria-hidden="true"
                            ></div>
                          </li>
                        </ul>
                      </fieldset>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="pt-8 space-y-6 sm:pt-10 sm:space-y-5">
              <div>
                <h3 class="text-lg leading-6 font-medium text-gray-900">
                  Investmentziele
                </h3>
                <p class="mt-1 max-w-2xl text-sm text-gray-500">
                  Bitte wählen Sie jeweils eine Option aus.
                </p>
              </div>
              <div class="sm:grid sm:grid-cols-2 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
                <label
                  for="investment-goal"
                  class="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
                >
                  Was ist Ihnen bei der Geldanlage grundsätzlich wichtig?
                </label>
                <div class="mt-1 sm:mt-0">
                  <fieldset>
                    <legend id="investment-goal" class="sr-only">
                      Investment Goal
                    </legend>
                    <ul
                      class="space-y-4"
                      role="radiogroup"
                      aria-labelledby="investment-goal"
                    >
                      <li
                        id="investment-goal-0"
                        tabindex="0"
                        role="radio"
                        aria-checked="true"
                        class="group relative bg-white rounded-lg shadow-sm cursor-pointer focus:outline-none focus:ring-1 focus:ring-offset-2 focus:ring-emerald-500"
                      >
                        <div class="rounded-lg border border-gray-300 bg-white px-6 py-4 hover:border-gray-400 sm:flex sm:justify-between">
                          <div class="flex items-center">
                            <div class="text-sm">
                              <p class="font-medium text-gray-900">
                                Gefühlte Sicherheit
                              </p>
                              <div class="text-gray-500">
                                <p class="sm:inline">
                                  Schwankungen möglichst zwischen -1% und 3%
                                  Ihrer Geldanlage.
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div
                          class="border-emerald-500 absolute inset-0 rounded-lg border-2 pointer-events-none"
                          aria-hidden="true"
                        ></div>
                      </li>

                      <li
                        id="investment-goal-1"
                        tabindex="-1"
                        role="radio"
                        aria-checked="false"
                        class="group relative bg-white rounded-lg shadow-sm cursor-pointer focus:outline-none focus:ring-1 focus:ring-offset-2 focus:ring-emerald-500"
                      >
                        <div class="rounded-lg border border-gray-300 bg-white px-6 py-4 hover:border-gray-400 sm:flex sm:justify-between">
                          <div class="flex items-center">
                            <div class="text-sm">
                              <p class="font-medium text-gray-900">
                                Inflation schlagen
                              </p>
                              <div class="text-gray-500">
                                <p class="sm:inline">
                                  Schwankungen möglichst zwischen -4% und +9%
                                  Ihrer Geldanlage.
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div
                          class="border-transparent absolute inset-0 rounded-lg border-2 pointer-events-none"
                          aria-hidden="true"
                        ></div>
                      </li>

                      <li
                        id="investment-goal-2"
                        tabindex="-1"
                        role="radio"
                        aria-checked="false"
                        class="group relative bg-white rounded-lg shadow-sm cursor-pointer focus:outline-none focus:ring-1 focus:ring-offset-2 focus:ring-emerald-500"
                      >
                        <div class="rounded-lg border border-gray-300 bg-white px-6 py-4 hover:border-gray-400 sm:flex sm:justify-between">
                          <div class="flex items-center">
                            <div class="text-sm">
                              <p class="font-medium text-gray-900">
                                Rendite erzielen
                              </p>
                              <div class="text-gray-500">
                                <p class="sm:inline">
                                  Schwankungen möglichst zwischen -10% und +18%
                                  Ihrer Geldanlage.
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div
                          class="border-transparent absolute inset-0 rounded-lg border-2 pointer-events-none"
                          aria-hidden="true"
                        ></div>
                      </li>

                      <li
                        id="investment-goal-3"
                        tabindex="-1"
                        role="radio"
                        aria-checked="false"
                        class="group relative bg-white rounded-lg shadow-sm cursor-pointer focus:outline-none focus:ring-1 focus:ring-offset-2 focus:ring-emerald-500"
                      >
                        <div class="rounded-lg border border-gray-300 bg-white px-6 py-4 hover:border-gray-400 sm:flex sm:justify-between">
                          <div class="flex items-center">
                            <div class="text-sm">
                              <p class="font-medium text-gray-900">
                                Chancen nutzen
                              </p>
                              <div class="text-gray-500">
                                <p class="sm:inline">
                                  Schwankungen möglichst zwischen -15% und +25%
                                  Ihrer Geldanlage.
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div
                          class="border-transparent absolute inset-0 rounded-lg border-2 pointer-events-none"
                          aria-hidden="true"
                        ></div>
                      </li>
                    </ul>
                  </fieldset>
                </div>
              </div>
              <div class="sm:grid sm:grid-cols-2 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
                <label
                  for="budget-surplus"
                  class="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
                >
                  Wie hoch ist Ihr monatlicher Haushaltsüberschuss?
                </label>
                <div class="mt-1 sm:mt-0">
                  <fieldset>
                    <legend id="budget-surplus" class="sr-only">
                      Budget surplus
                    </legend>
                    <ul
                      class="space-y-4"
                      role="radiogroup"
                      aria-labelledby="budget-surplus"
                    >
                      <li
                        id="budget-surplus-0"
                        tabindex="0"
                        role="radio"
                        aria-checked="true"
                        class="group relative bg-white rounded-lg shadow-sm cursor-pointer focus:outline-none focus:ring-1 focus:ring-offset-2 focus:ring-emerald-500"
                      >
                        <div class="rounded-lg border border-gray-300 bg-white px-6 py-4 hover:border-gray-400 sm:flex sm:justify-between">
                          <div class="text-sm">
                            <p class="font-medium text-gray-900">
                              Unter 1.000€
                            </p>
                          </div>
                        </div>
                        <div
                          class="border-emerald-500 absolute inset-0 rounded-lg border-2 pointer-events-none"
                          aria-hidden="true"
                        ></div>
                      </li>

                      <li
                        id="budget-surplus-1"
                        tabindex="-1"
                        role="radio"
                        aria-checked="false"
                        class="group relative bg-white rounded-lg shadow-sm cursor-pointer focus:outline-none focus:ring-1 focus:ring-offset-2 focus:ring-emerald-500"
                      >
                        <div class="rounded-lg border border-gray-300 bg-white px-6 py-4 hover:border-gray-400 sm:flex sm:justify-between">
                          <div class="text-sm">
                            <p class="font-medium text-gray-900">
                              1.000€ bis 1.500€
                            </p>
                          </div>
                        </div>
                        <div
                          class="border-transparent absolute inset-0 rounded-lg border-2 pointer-events-none"
                          aria-hidden="true"
                        ></div>
                      </li>

                      <li
                        id="budget-surplus-2"
                        tabindex="-1"
                        role="radio"
                        aria-checked="false"
                        class="group relative bg-white rounded-lg shadow-sm cursor-pointer focus:outline-none focus:ring-1 focus:ring-offset-2 focus:ring-emerald-500"
                      >
                        <div class="rounded-lg border border-gray-300 bg-white px-6 py-4 hover:border-gray-400 sm:flex sm:justify-between">
                          <div class="text-sm">
                            <p class="font-medium text-gray-900">
                              1.500€ bis 2.500€
                            </p>
                          </div>
                        </div>

                        <div
                          class="border-transparent absolute inset-0 rounded-lg border-2 pointer-events-none"
                          aria-hidden="true"
                        ></div>
                      </li>

                      <li
                        id="budget-surplus-3"
                        tabindex="-1"
                        role="radio"
                        aria-checked="false"
                        class="group relative bg-white rounded-lg shadow-sm cursor-pointer focus:outline-none focus:ring-1 focus:ring-offset-2 focus:ring-emerald-500"
                      >
                        <div class="rounded-lg border border-gray-300 bg-white px-6 py-4 hover:border-gray-400 sm:flex sm:justify-between">
                          <div class="text-sm">
                            <p class="font-medium text-gray-900">Über 2.500€</p>
                          </div>
                        </div>

                        <div
                          class="border-transparent absolute inset-0 rounded-lg border-2 pointer-events-none"
                          aria-hidden="true"
                        ></div>
                      </li>
                    </ul>
                  </fieldset>
                </div>
              </div>
              <div class="sm:grid sm:grid-cols-2 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
                <label
                  for="emergency-reserve"
                  class="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
                >
                  Wie lange können Sie von Ihren "eisernen Reserven" leben?
                </label>
                <div class="mt-1 sm:mt-0">
                  <fieldset>
                    <legend id="emergency-reserve" class="sr-only">
                      Emergency reserve
                    </legend>
                    <ul
                      class="space-y-4"
                      role="radiogroup"
                      aria-labelledby="emergency-reserve"
                    >
                      <li
                        id="emergency-reserve-0"
                        tabindex="0"
                        role="radio"
                        aria-checked="true"
                        class="group relative bg-white rounded-lg shadow-sm cursor-pointer focus:outline-none focus:ring-1 focus:ring-offset-2 focus:ring-emerald-500"
                      >
                        <div class="rounded-lg border border-gray-300 bg-white px-6 py-4 hover:border-gray-400 sm:flex sm:justify-between">
                          <div class="text-sm">
                            <p class="font-medium text-gray-900">
                              Keine Reserven
                            </p>
                          </div>
                        </div>
                        <div
                          class="border-emerald-500 absolute inset-0 rounded-lg border-2 pointer-events-none"
                          aria-hidden="true"
                        ></div>
                      </li>

                      <li
                        id="emergency-reserve-1"
                        tabindex="-1"
                        role="radio"
                        aria-checked="false"
                        class="group relative bg-white rounded-lg shadow-sm cursor-pointer focus:outline-none focus:ring-1 focus:ring-offset-2 focus:ring-emerald-500"
                      >
                        <div class="rounded-lg border border-gray-300 bg-white px-6 py-4 hover:border-gray-400 sm:flex sm:justify-between">
                          <div class="text-sm">
                            <p class="font-medium text-gray-900">
                              Bis zu einen Monat
                            </p>
                          </div>
                        </div>
                        <div
                          class="border-transparent absolute inset-0 rounded-lg border-2 pointer-events-none"
                          aria-hidden="true"
                        ></div>
                      </li>

                      <li
                        id="emergency-reserve-2"
                        tabindex="-1"
                        role="radio"
                        aria-checked="false"
                        class="group relative bg-white rounded-lg shadow-sm cursor-pointer focus:outline-none focus:ring-1 focus:ring-offset-2 focus:ring-emerald-500"
                      >
                        <div class="rounded-lg border border-gray-300 bg-white px-6 py-4 hover:border-gray-400 sm:flex sm:justify-between">
                          <div class="text-sm">
                            <p class="font-medium text-gray-900">
                              Bis zu zwei Monate
                            </p>
                          </div>
                        </div>

                        <div
                          class="border-transparent absolute inset-0 rounded-lg border-2 pointer-events-none"
                          aria-hidden="true"
                        ></div>
                      </li>

                      <li
                        id="emergency-reserve-3"
                        tabindex="-1"
                        role="radio"
                        aria-checked="false"
                        class="group relative bg-white rounded-lg shadow-sm cursor-pointer focus:outline-none focus:ring-1 focus:ring-offset-2 focus:ring-emerald-500"
                      >
                        <div class="rounded-lg border border-gray-300 bg-white px-6 py-4 hover:border-gray-400 sm:flex sm:justify-between">
                          <div class="text-sm">
                            <p class="font-medium text-gray-900">
                              Über zwei Monate
                            </p>
                          </div>
                        </div>

                        <div
                          class="border-transparent absolute inset-0 rounded-lg border-2 pointer-events-none"
                          aria-hidden="true"
                        ></div>
                      </li>
                    </ul>
                  </fieldset>
                </div>
              </div>
              <div class="sm:grid sm:grid-cols-2 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
                <label
                  for="current-assets"
                  class="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
                >
                  Wie hoch ist Ihr derzeitiges Geld- und Wertpapiervermögen in
                  Euro?
                </label>
                <div class="mt-1 sm:mt-0">
                  <div class="mt-1 relative rounded-md shadow-sm">
                    <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <span class="text-gray-500 sm:text-sm">€</span>
                    </div>
                    <input
                      type="text"
                      name="current-assets"
                      id="current-assets"
                      class="focus:ring-emerald-500 focus:border-emerald-500 block w-full pl-7 pr-12 sm:text-sm border-gray-300 rounded-md"
                      placeholder="1.000,00"
                      aria-describedby="current-assets-currency"
                    />
                    <div class="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                      <span
                        class="text-gray-500 sm:text-sm"
                        id="current-assets-currency"
                      >
                        EUR
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div class="sm:grid sm:grid-cols-2 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
                <label
                  for="investment-horizon"
                  class="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
                >
                  Wie lange möchten Sie Ihr Geld zur Vermögensbildung anlegen?
                </label>
                <div class="mt-1 sm:mt-0">
                  <fieldset>
                    <legend id="investment-horizon" class="sr-only">
                      Investment Horizon
                    </legend>
                    <ul
                      class="space-y-4"
                      role="radiogroup"
                      aria-labelledby="investment-horizon"
                    >
                      <li
                        id="investment-horizon-0"
                        tabindex="0"
                        role="radio"
                        aria-checked="true"
                        class="group relative bg-white rounded-lg shadow-sm cursor-pointer focus:outline-none focus:ring-1 focus:ring-offset-2 focus:ring-emerald-500"
                      >
                        <div class="rounded-lg border border-gray-300 bg-white px-6 py-4 hover:border-gray-400 sm:flex sm:justify-between">
                          <div class="text-sm">
                            <p class="font-medium text-gray-900">
                              Bis fünf Jahre
                            </p>
                          </div>
                        </div>
                        <div
                          class="border-emerald-500 absolute inset-0 rounded-lg border-2 pointer-events-none"
                          aria-hidden="true"
                        ></div>
                      </li>

                      <li
                        id="investment-horizon-1"
                        tabindex="-1"
                        role="radio"
                        aria-checked="false"
                        class="group relative bg-white rounded-lg shadow-sm cursor-pointer focus:outline-none focus:ring-1 focus:ring-offset-2 focus:ring-emerald-500"
                      >
                        <div class="rounded-lg border border-gray-300 bg-white px-6 py-4 hover:border-gray-400 sm:flex sm:justify-between">
                          <div class="text-sm">
                            <p class="font-medium text-gray-900">
                              Fünf bis sieben Jahre
                            </p>
                          </div>
                        </div>
                        <div
                          class="border-transparent absolute inset-0 rounded-lg border-2 pointer-events-none"
                          aria-hidden="true"
                        ></div>
                      </li>

                      <li
                        id="investment-horizon-2"
                        tabindex="-1"
                        role="radio"
                        aria-checked="false"
                        class="group relative bg-white rounded-lg shadow-sm cursor-pointer focus:outline-none focus:ring-1 focus:ring-offset-2 focus:ring-emerald-500"
                      >
                        <div class="rounded-lg border border-gray-300 bg-white px-6 py-4 hover:border-gray-400 sm:flex sm:justify-between">
                          <div class="text-sm">
                            <p class="font-medium text-gray-900">
                              Sieben bis zehn Jahre
                            </p>
                          </div>
                        </div>

                        <div
                          class="border-transparent absolute inset-0 rounded-lg border-2 pointer-events-none"
                          aria-hidden="true"
                        ></div>
                      </li>

                      <li
                        id="investment-horizon-3"
                        tabindex="-1"
                        role="radio"
                        aria-checked="false"
                        class="group relative bg-white rounded-lg shadow-sm cursor-pointer focus:outline-none focus:ring-1 focus:ring-offset-2 focus:ring-emerald-500"
                      >
                        <div class="rounded-lg border border-gray-300 bg-white px-6 py-4 hover:border-gray-400 sm:flex sm:justify-between">
                          <div class="text-sm">
                            <p class="font-medium text-gray-900">
                              Über zehn Jahre
                            </p>
                          </div>
                        </div>

                        <div
                          class="border-transparent absolute inset-0 rounded-lg border-2 pointer-events-none"
                          aria-hidden="true"
                        ></div>
                      </li>
                    </ul>
                  </fieldset>
                </div>
              </div>
              <div class="sm:grid sm:grid-cols-2 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
                <label
                  for="investment-concept"
                  class="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
                >
                  Welches Anlagekonzept bevorzugen Sie?
                </label>
                <div class="mt-1 sm:mt-0">
                  <fieldset>
                    <legend id="investment-concept" class="sr-only">
                      Investment Concept
                    </legend>
                    <ul
                      class="space-y-4"
                      role="radiogroup"
                      aria-labelledby="investment-concept"
                    >
                      <li
                        id="investment-concept-0"
                        tabindex="0"
                        role="radio"
                        aria-checked="true"
                        class="group relative bg-white rounded-lg shadow-sm cursor-pointer focus:outline-none focus:ring-1 focus:ring-offset-2 focus:ring-emerald-500"
                      >
                        <div class="rounded-lg border border-gray-300 bg-white px-6 py-4 hover:border-gray-400 sm:flex sm:justify-between">
                          <div class="flex items-center">
                            <div class="text-sm">
                              <p class="font-medium text-gray-900">
                                Klassische Geldanlage
                              </p>
                              <div class="text-gray-500">
                                <p class="sm:inline">
                                  Weltweit diversifiziert in ETFs aller
                                  Anlageklassen investieren.
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div
                          class="border-emerald-500 absolute inset-0 rounded-lg border-2 pointer-events-none"
                          aria-hidden="true"
                        ></div>
                      </li>

                      <li
                        id="investment-concept-1"
                        tabindex="-1"
                        role="radio"
                        aria-checked="false"
                        class="group relative bg-white rounded-lg shadow-sm cursor-pointer focus:outline-none focus:ring-1 focus:ring-offset-2 focus:ring-emerald-500"
                      >
                        <div class="rounded-lg border border-gray-300 bg-white px-6 py-4 hover:border-gray-400 sm:flex sm:justify-between">
                          <div class="flex items-center">
                            <div class="text-sm">
                              <p class="font-medium text-gray-900">
                                Nachhaltige Geldanlage
                              </p>
                              <div class="text-gray-500">
                                <p class="sm:inline">
                                  Weltweit diversifiziert investieren in ETFs
                                  mit Fokus auf Nachhaltigkeit.
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div
                          class="border-transparent absolute inset-0 rounded-lg border-2 pointer-events-none"
                          aria-hidden="true"
                        ></div>
                      </li>
                    </ul>
                  </fieldset>
                </div>
              </div>
            </div>
            <div class="pt-5">
              <div class="flex justify-end">
                <button
                  type="submit"
                  onClick={() => mixpanel.track("Show sample portfolio")}
                  class="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-lg font-bold rounded-md text-white bg-emerald-600 hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500"
                >
                  Musterportfolio anzeigen
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
