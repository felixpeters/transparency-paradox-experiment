import React from "react"
import { Fragment, useState } from "react"
import { Dialog, Transition } from "@headlessui/react"

export default function FondsExplanationPanel({ portfolio, show, toggle }) {
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
                        Warum wurden diese Fonds ausgewählt?
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
                        Unsere KI wählt die Fonds für Ihr Portfolio{" "}
                        <b>basierend auf folgenden Kriterien</b> aus:
                      </p>
                      <ul className="my-2 list-disc list-inside">
                        <li>Ihrer Angabe zum Risikoanteil</li>
                        <li>Ihrer Angabe zur Investmentstrategie</li>
                        <li>Historische Rendite</li>
                        <li>Abgedeckte Anlageklasse</li>
                        <li>Kosten</li>
                      </ul>
                      <p>
                        Dabei verfolgt die KI <b>folgende Vorgaben</b>:
                      </p>
                      <ul className="my-2 list-decimal list-inside space-y-1">
                        <li>
                          Je höher der gewünschte Risikoanteil ist, desto eher
                          werden risikoreichere Anlagen wie Aktien und Rohstoffe
                          risikoärmeren Anlagen wie Staats- und
                          Unternehmensanleihen vorgezogen.
                        </li>
                        <li>
                          Wenn Sie die Investmentstrategie "Nachhaltig"
                          ausgewählt haben, werden bevorzugt Fonds ins Portfolio
                          aufgenommen, die sich auf Aktien von klimaneutralen
                          Unternehmen spezialisieren.
                        </li>
                        <li>
                          Kommen ähnliche Fonds für das Portfolio in Frage, wird
                          auf Basis des Rendite-Kosten-Verhältnisses
                          entschieden.
                        </li>
                        <li>
                          Es sollen möglichst viele verschiedene Anlageklassen
                          abgedeckt werden. Beispielsweise enthält der
                          risikoreiche Anteil Ihres Portfolios Aktien- und
                          Rohstofffonds, der risikoärmere Anteil Unternehmens-
                          und Staatsanleihen.
                        </li>
                      </ul>
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
