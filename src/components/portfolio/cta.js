import React, { useState } from "react"
import { Link } from "gatsby"
import { useMixpanel } from "gatsby-plugin-mixpanel"

function classNames(...classes) {
  return classes.filter(Boolean).join(" ")
}

export default function CTA() {
  const mixpanel = useMixpanel()
  const [finished, setFinished] = useState(false)
  return (
    <div class="bg-gray-50">
      <div class="max-w-7xl mx-auto text-center py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        <h2 class="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
          <span class="block">
            {finished
              ? "Vielen Dank für Ihre Teilnahme!"
              : "Bereit zu investieren?"}
          </span>
          <span class="block">
            {finished
              ? "Bitte kehren Sie jetzt zurück zur Umfrage."
              : "Starten Sie noch heute."}
          </span>
        </h2>
        <div
          class={classNames(
            finished ? "hidden" : "",
            "mt-8 flex gap-4 justify-center"
          )}
        >
          <div class="inline-flex rounded-md shadow">
            <button
              onClick={() => {
                mixpanel.track("Invest")
                setFinished(true)
              }}
              class="inline-flex items-center justify-center px-5 py-3 border border-transparent text-xl font-bold rounded-md text-white bg-emerald-600 hover:bg-emerald-700"
            >
              Ja, ich möchte investieren.
            </button>
          </div>
          <div class="inline-flex rounded-md shadow">
            <button
              onClick={() => {
                mixpanel.track("Don't invest")
                setFinished(true)
              }}
              class="inline-flex items-center justify-center px-5 py-3 border border-transparent text-xl font-bold rounded-md text-white bg-emerald-600 hover:bg-emerald-700"
            >
              Nein, ich möchte nicht investieren.
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
