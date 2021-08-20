import React from "react"

import Divider from "./Divider"

export default function StatNumber({
  value = "", label = "", withPlus = false }) {
  return (
    <div>
      <Divider />
      <div className="text-[56px] font-bold font-display text-white">
        {value}
        {withPlus && <span className="text-like-cyan-vlight text-opacity-70">+</span>}
      </div>
      <div className="text-[16px] text-like-cyan-vlight text-opacity-70">
        {label}
      </div>
    </div>
  )
}