import * as React from "react"
import cn from "classnames"

import Button from "./Button"
import NorthEastMiniIcon from "./icons/NorthEastMini"

export default function AppItem({ title, image, url, isOfficial = false, ...props }) {
  return (
    <div
      className={cn("p-[32px] bg-white rounded-[16px] border-[2px]", isOfficial ? "border-like-cyan-light" : "border-shade-gray")}
      {...props}
    >
      <img src={image} alt={title} />
      <div className={cn("mt-[12px] text-[24px] font-600", isOfficial ? "text-like-green" : "text-dark-gray")}>{title}</div>
      <Button
        className="flex items-center justify-center mt-[12px] py-[4px]"
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