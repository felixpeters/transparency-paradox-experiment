import React from "react"
import { Fragment, useState } from "react"
import { Dialog, Transition } from "@headlessui/react"

function formatPercentage(num) {
  return new Intl.NumberFormat("de-DE").format(num * 100) + "%"
}

export default function PrognosisExplanationPanel({ portfolio, show, toggle }) {
  return (
    <Transition.Root show={show} as={Fragment}>
      <Dialog
        as="div"
        static
        className="fixed inset-0 overflow-hidden"
        open={show}
        onClose={toggle}
      >
        <div className="absolute inset-0 overflow-hidden">
          <Dialog.Overlay className="absolute inset-0" />

          <div className="fixed inset-y-0 right-0 pl-10 max-w-full flex">
            <Transition.Child
              as={Fragment}
              enter="transform transition ease-in-out duration-500 sm:duration-700"
              enterFrom="translate-x-full"
              enterTo="translate-x-0"
              leave="transform transition ease-in-out duration-500 sm:duration-700"
              leaveFrom="translate-x-0"
              leaveTo="translate-x-full"
            >
              <div className="w-screen max-w-md">
                <div className="h-full flex flex-col py-6 bg-white shadow-xl overflow-y-scroll">
                  <div className="px-4 sm:px-6">
                    <div className="flex items-start justify-between">
                      <Dialog.Title className="text-lg font-medium text-gray-900">
                        Wie wurden die Prognosen erstellt?
                      </Dialog.Title>
                      <div className="ml-3 h-7 flex items-center">
                        <button
                          className="bg-white rounded-md text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                          onClick={() => toggle(false)}
                        >
                          <span className="sr-only">Close panel</span>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M6 18L18 6M6 6l12 12"
                            />
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="mt-6 relative flex-1 px-4 sm:px-6">
                    {/* Replace with your content */}
                    <div className="absolute inset-0 px-4 sm:px-6">
                      <p>
                        Unsere KI prognostiziert für jedes Portfolio zwei
                        grundlegende Werte: die{" "}
                        <b>erwartete jährliche Rendite</b> und das{" "}
                        <b>erwartete jährliche Risiko</b>. Für Ihre Prognosen
                        greift die KI auf{" "}
                        <b>Daten aus mehr als 300 externen Quellen</b> zurück
                        (z.B. Börsen-, Nachrichten- oder Wetterdaten) und{" "}
                        <b>simuliert mit mehr als 1.000 Modellen</b>, wie sich{" "}
                        <b>verschiedenste Szenarien</b> auf mehr als 7.300
                        Wertpapiere auswirken könnten. Für jedes Szenario werden
                        die Rendite und das Risiko Ihres Portfolios bestimmt.
                        Anschließend werden diese{" "}
                        <b>
                          Werte unter Berücksichtigung der
                          Eintrittswahrscheinlichkeit jedes Szenarios gemittelt
                        </b>
                        .
                      </p>
                      <br />
                      <p>
                        Die erwartete jährliche Rendite (für Ihr Portfolio:{" "}
                        {formatPercentage(portfolio.return_yearly)}) steht dabei
                        für den <b>erwarteten durchschnittlichen Gewinn</b>, den
                        unsere KI für das erstellte Portfolio berechnet hat. Das
                        erwartete jährliche Risiko (für Ihr Portfolio:{" "}
                        {formatPercentage(portfolio.risk_yearly)}) gibt an,{" "}
                        <b>wie viel Schwankung unsere KI in den Gewinnen</b>{" "}
                        erwartet. Das{" "}
                        <b>
                          Risiko kann sich dabei positiv oder negativ auf den
                          Gewinn auswirken
                        </b>
                        . Im besten Fall prognostiziert die KI somit einen
                        Gewinn, der sich aus der Summe des erwarteten Gewinns
                        und des erwarteten Risikos ergibt (in Ihrem Portfolio:{" "}
                        {formatPercentage(portfolio.return_yearly)} +{" "}
                        {formatPercentage(portfolio.risk_yearly)} ={" "}
                        {formatPercentage(
                          portfolio.return_yearly + portfolio.risk_yearly
                        )}
                        ). Im ungünstigsten Fall reduziert sich ihr erwarteter
                        Gewinn um das errechnete Risiko (in Ihrem Portfolio:{" "}
                        {formatPercentage(portfolio.return_yearly)} -{" "}
                        {formatPercentage(portfolio.risk_yearly)} ={" "}
                        {formatPercentage(
                          portfolio.return_yearly - portfolio.risk_yearly
                        )}
                        ).
                      </p>
                    </div>
                    {/* /End replace */}
                  </div>
                </div>
              </div>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  )
}
