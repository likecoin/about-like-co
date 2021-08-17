import React from "react"
import cn from "classnames"

export default function Divider({ className, ...props }) {
  return (
    <hr
      className={cn("w-[32px] h-[2px] bg-like-cyan-vlight border-none", className)}
      {...props}
    />
  )
}
