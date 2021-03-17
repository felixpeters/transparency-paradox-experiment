import React from "react"
import Header from "./header"

export default function Layout({ children }) {
  return (
    <div class="relative bg-gray-50">
      <Header />
      <main class="lg:relative">{children}</main>
    </div>
  )
}
