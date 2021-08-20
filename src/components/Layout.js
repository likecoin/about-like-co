import React from "react"
import cn from "classnames"

import Header from "./Header"
import Footer from "./Footer"
import Seo from "./SEO"

export default function Layout({ className, children }) {
  return (
    <div className={cn("overflow-hidden bg-like-green", className)}>
      <Seo />
      <div className="relative flex flex-col w-full max-w-[1440px] min-h-screen mx-auto">
        <Header />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </div>
    </div>
  )
}