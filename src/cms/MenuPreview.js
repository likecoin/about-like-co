import React from "react"

import { Header } from "../components/Header"

export default function MenuPreview({ entry }) {
  const headerMenuItemsData = entry.getIn(["data", "headerMenuItems"])
  const headerMenuItems = JSON.parse(headerMenuItemsData.toJSON().code)
  return (
    <div className="flex justify-center p-[24px]">
      <Header items={headerMenuItems} />
    </div>
  )
}
