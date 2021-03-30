import React from "react"

export default function PortfolioStructure() {
  return (
    <div class="max-w-7xl mx-auto my-8 px-4 sm:px-6 lg:px-8">
      <h3 class="text-xl leading-6 font-medium text-gray-900">
        Anlagestruktur
      </h3>
      <div class="mt-4 rounded-lg bg-white overflow-hidden shadow">
        <div class="flex flex-row">
          <div class="flex-1 px-4 py-4">
            <img src={"/structure_1.svg"} />
          </div>
          <div class="flex-1 px-4 py-4">World</div>
        </div>
      </div>
    </div>
  )
}
