import React from "react"
import cn from "classnames"

export default function GradientText({ className, tag = 'div', children, ...props }) {
  const Tag = tag
  return (
    <Tag
      className={cn('text-transparent font-bold font-display bg-gradient-to-r from-[#D2F0F0] to-[#F0E6B4] bg-clip-text', className)}
      {...props}
    >
      {children}
    </Tag>
  )
}
