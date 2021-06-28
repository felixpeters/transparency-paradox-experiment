import React from "react"
import { Link } from "gatsby"
import { useMixpanel } from "gatsby-plugin-mixpanel"

export default function Hero() {
  const mixpanel = useMixpanel()
  return (
    <div class="lg:relative">
      <div class="mx-auto max-w-7xl w-full pt-16 pb-20 text-center lg:py-48 lg:text-left">
        <div class="px-4 lg:w-7/12 sm:px-8 xl:pr-16">
          <h1 class="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl">
            <span class="block xl:inline">Investieren mit</span>
            <br />
            <span class="block text-emerald-600 xl:inline">
              Künstlicher Intelligenz
            </span>
          </h1>
          <p class="mt-3 max-w-md mx-auto text-lg text-gray-500 sm:text-xl md:mt-5 md:max-w-3xl">
            Unsere intelligenten Algorithmen erstellen Ihr persönliches
            ETF-Portfolio, basierend auf Ihren Wünschen und Zielen. Nach der
            Erstellung wird Ihr Portfolio laufend und kosteneffizient überwacht.
          </p>
          <div class="mt-10 sm:flex sm:justify-center lg:justify-start">
            <div class="rounded-md shadow">
              <Link
                to="/survey"
                onClick={() => mixpanel.track("Open depot", {section: "hero"})}
                class="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-emerald-600 hover:bg-emerald-700 md:py-4 md:text-lg md:px-10"
              >
                Depot eröffnen
              </Link>
            </div>
            <div class="mt-3 rounded-md shadow sm:mt-0 sm:ml-3">
              <Link
                to="/survey"
                onClick={() => mixpanel.track("Create sample portfolio", {section: "hero"})}
                class="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-emerald-600 bg-white hover:bg-gray-50 md:py-4 md:text-lg md:px-10"
              >
                Musterportfolio erstellen
              </Link>
            </div>
          </div>
        </div>
        <div class="relative w-full h-64 sm:h-72 md:h-96 lg:absolute lg:inset-y-0 lg:right-0 lg:w-5/12 lg:h-full">
          <img
            class="absolute inset-0 w-full h-full object-cover"
            src="https://de.scalable.capital/images/3odztfgndkxn/4scXNPPCNiWOWuqA0qYi6o/8ef16afaca737641e6924dcd92b336a3/scalable_tilt_phones_DE.png"
            alt=""
          />
        </div>
      </div>
    </div>
  )
}
