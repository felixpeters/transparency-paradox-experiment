import React from "react"
import { useMixpanel } from "gatsby-plugin-mixpanel"
import { useState } from "react"
import { navigate } from "gatsby"
import { RadioGroup } from "@headlessui/react"

const riskShareOptions = [
  {
    name: "Nur risikoarme Anlagen (0%)",
    value: 0,
    description: "Übliche Rendite zwischen XX% und XX% Ihrer Geldanlage.",
  },
  {
    name: "Niedriger Anteil risikoreicher Anlagen (20%)",
    value: 20,
    description: "Übliche Rendite zwischen XX% und XX% Ihrer Geldanlage.",
  },
  {
    name: "Gleicher Anteil risikoarmer und -reicher Anlagen (50%)",
    value: 50,
    description: "Übliche Rendite zwischen XX% und XX% Ihrer Geldanlage.",
  },
  {
    name: "Hoher Anteil risikoreicher Anlagen (80%)",
    value: 80,
    description: "Übliche Rendite zwischen XX% und XX% Ihrer Geldanlage.",
  },
  {
    name: "Nur risikoreiche Anlagen (100%)",
    value: 100,
    description: "Übliche Rendite zwischen XX% und XX% Ihrer Geldanlage.",
  },
]

const investmentStrategyOptions = [
  {
    name: "Klassische Geldanlage",
    value: "Klassisch",
    description:
      "Weltweit diversifiziert in ETFs verschiedener Anlageklassen investieren",
  },
  {
    name: "Nachhaltige Geldanlage",
    value: "Nachhaltig",
    description: "Weltweit diversifiziert in ETFs mit Fokus auf Nachhaltigkeit",
  },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(" ")
}

export default function SurveyForm() {
  const mixpanel = useMixpanel()
  const [investmentAmount, setInvestmentAmount] = useState(10000)
  const [riskShare, setRiskShare] = useState(50)
  const [investmentStrategy, setInvestmentStrategy] = useState("Klassisch")
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
                    Bitte beantworten Sie die folgende Frage.
                  </p>
                </div>

                <div class="mt-6 sm:mt-5 space-y-6 sm:space-y-5">
                  <div class="sm:grid sm:grid-cols-2 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
                    <label
                      for="risk-share"
                      class="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
                    >
                      Wählen Sie die Höhe des risikoreichen Anteils für Ihr
                      Portfolio.
                    </label>
                    <div class="mt-1 sm:mt-0">
                      <RadioGroup value={riskShare} onChange={setRiskShare}>
                        <RadioGroup.Label className="sr-only">
                          Risikoanteil
                        </RadioGroup.Label>
                        <div className="space-y-4">
                          {riskShareOptions.map(option => (
                            <RadioGroup.Option
                              key={option.value}
                              value={option.value}
                              className={({ active }) =>
                                classNames(
                                  active
                                    ? "ring-1 ring-offset-2 ring-emerald-500"
                                    : "",
                                  "relative block rounded-lg border border-gray-300 bg-white shadow-sm px-6 py-4 cursor-pointer hover:border-gray-400 sm:flex sm:justify-between focus:outline-none"
                                )
                              }
                            >
                              {({ checked }) => (
                                <>
                                  <div className="flex items-center">
                                    <div className="text-sm">
                                      <RadioGroup.Label
                                        as="p"
                                        className="font-medium text-gray-900"
                                      >
                                        {option.name}
                                      </RadioGroup.Label>
                                      <RadioGroup.Description
                                        as="div"
                                        className="text-gray-500"
                                      >
                                        <p className="sm:inline">
                                          {option.description}
                                        </p>{" "}
                                      </RadioGroup.Description>
                                    </div>
                                  </div>
                                  <div
                                    className={classNames(
                                      checked
                                        ? "border-emerald-500"
                                        : "border-transparent",
                                      "absolute -inset-px rounded-lg border-2 pointer-events-none"
                                    )}
                                    aria-hidden="true"
                                  />
                                </>
                              )}
                            </RadioGroup.Option>
                          ))}
                        </div>
                      </RadioGroup>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="pt-8 space-y-6 sm:space-y-5">
              <div>
                <h3 class="text-lg leading-6 font-medium text-gray-900">
                  Investmentbetrag
                </h3>
                <p class="mt-1 max-w-2xl text-sm text-gray-500">
                  Bitte geben Sie an, wie viel Geld Sie investieren möchten.
                </p>
              </div>
              <div class="sm:grid sm:grid-cols-2 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
                <label
                  for="investment-amount"
                  class="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
                >
                  Wählen Sie den gewünschten Anlagebetrag.
                </label>
                <div class="mt-1 sm:mt-0">
                  <div class="mt-1 relative rounded-md shadow-sm">
                    <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <span class="text-gray-500 sm:text-sm">€</span>
                    </div>
                    <input
                      type="text"
                      name="investment-amount"
                      id="investment-amount"
                      class="focus:ring-emerald-500 focus:border-emerald-500 block w-full pl-7 pr-12 sm:text-sm border-gray-300 rounded-md"
                      placeholder={investmentAmount}
                      onChange={setInvestmentAmount}
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
            </div>
            <div class="pt-8 space-y-6 divide-y divide-gray-200 sm:space-y-5">
              <div>
                <div>
                  <h3 class="text-lg leading-6 font-medium text-gray-900">
                    Investmentstrategie
                  </h3>
                  <p class="mt-1 max-w-2xl text-sm text-gray-500">
                    Bitte beantworten Sie die folgende Frage.
                  </p>
                </div>

                <div class="mt-6 sm:mt-5 space-y-6 sm:space-y-5">
                  <div class="sm:grid sm:grid-cols-2 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
                    <label
                      for="investment-strategy"
                      class="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
                    >
                      Wählen Sie die Höhe des risikoreichen Anteils für Ihr
                      Portfolio.
                    </label>
                    <div class="mt-1 sm:mt-0">
                      <RadioGroup
                        value={investmentStrategy}
                        onChange={setInvestmentStrategy}
                      >
                        <RadioGroup.Label className="sr-only">
                          Investmentstrategie
                        </RadioGroup.Label>
                        <div className="space-y-4">
                          {investmentStrategyOptions.map(option => (
                            <RadioGroup.Option
                              key={option.value}
                              value={option.value}
                              className={({ active }) =>
                                classNames(
                                  active
                                    ? "ring-1 ring-offset-2 ring-emerald-500"
                                    : "",
                                  "relative block rounded-lg border border-gray-300 bg-white shadow-sm px-6 py-4 cursor-pointer hover:border-gray-400 sm:flex sm:justify-between focus:outline-none"
                                )
                              }
                            >
                              {({ checked }) => (
                                <>
                                  <div className="flex items-center">
                                    <div className="text-sm">
                                      <RadioGroup.Label
                                        as="p"
                                        className="font-medium text-gray-900"
                                      >
                                        {option.name}
                                      </RadioGroup.Label>
                                      <RadioGroup.Description
                                        as="div"
                                        className="text-gray-500"
                                      >
                                        <p className="sm:inline">
                                          {option.description}
                                        </p>{" "}
                                      </RadioGroup.Description>
                                    </div>
                                  </div>
                                  <div
                                    className={classNames(
                                      checked
                                        ? "border-emerald-500"
                                        : "border-transparent",
                                      "absolute -inset-px rounded-lg border-2 pointer-events-none"
                                    )}
                                    aria-hidden="true"
                                  />
                                </>
                              )}
                            </RadioGroup.Option>
                          ))}
                        </div>
                      </RadioGroup>
                    </div>
                  </div>
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
