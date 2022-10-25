import React from "react"
import { IconDepub } from "./icons/Depub"

export default function ParagraphSection({ title, children, ...props}) {
  return (
    <div {...props}>
      <div className="text-like-cyan"><IconDepub /></div>
      <h3 className="mt-[8px] text-like-cyan-light text-[20px] font-bold">{title}</h3>
      <p className="mt-[8px] text-like-cyan-vlight text-[16px] text-opacity-80">{children}</p>
    </div>
  )
}