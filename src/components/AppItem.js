import * as React from "react"
import cn from "classnames"

import Button from "./Button"
import NorthEastMiniIcon from "./icons/NorthEastMini"

export default function AppItem({
  title,
  image,
  url,
  description,
  isOfficial = false,
  ...props
}) {
  return (
    <div
      className={cn("relative bg-white rounded-[16px] border-[2px] p-[32px] h-full", isOfficial ? "border-like-cyan-light" : "border-shade-gray")}
      {...props}
    >
      <img className="w-[64px] h-[64px]" src={image} alt={title} />
      <div className={cn("mt-[12px] text-[24px] font-600", isOfficial ? "text-like-green" : "text-dark-gray")}>{title}</div>
      <div className={cn("my-[12px] text-dark-gray mb-[60px]")}> {description} </div>
      <Button
        className="absolute left-[50%] translate-x-[-50%] bottom-[40px] flex items-center justify-center py-[4px] w-[188px]"
        preset={isOfficial ? "filled" : "outlined"}
        theme={isOfficial ? "dark" : "light"}
        href={url}
        target="_blank"
        rel="referrer"
        isNoPadding
      >
        Visit <NorthEastMiniIcon className="ml-[4px]"/>
      </Button>
    </div>
  )
}