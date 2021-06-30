import React from "react"
import { Link } from "gatsby"
import { useMixpanel } from "gatsby-plugin-mixpanel"

export default function CTA({ tic }) {
  const mixpanel = useMixpanel()
  return (
    <div class="bg-gray-50">
      <div class="max-w-7xl mx-auto text-center py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        <h2 class="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
          <span class="block">Bereit zu investieren?</span>
          <span class="block">Starten Sie noch heute.</span>
        </h2>
        <div class="mt-8 flex justify-center">
          <div class="inline-flex rounded-md shadow">
            <Link
              to="/survey"
              state={{ tic: tic }}
              onClick={() => mixpanel.track("Open depot", { section: "cta" })}
              class="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-emerald-600 hover:bg-emerald-700"
            >
              Depot eröffnen
            </Link>
          </div>
          <div class="ml-3 inline-flex rounded-md shadow">
            <Link
              to="/survey"
              state={{ tic: tic }}
              onClick={() =>
                mixpanel.track("Create sample portfolio", { section: "cta" })
              }
              class="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-emerald-600 bg-white hover:bg-gray-50"
            >
              Musterportfolio erstellen
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
