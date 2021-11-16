import * as React from "react"

import Button from "./Button"
import NorthEastMiniIcon from "./icons/NorthEastMini"

export default function PluginItem({
  title,
  buttonTitle,
  image,
  url,
  description,
  isDisabled = false,
  ...props
}) {
  return (
    <div className="p-[32px] bg-white rounded-[16px] border-[2px] border-shade-gray" {...props}>
      <div className="flex items-center">
        <img src={image} alt={title} />
        <div className="ml-[12px] text-[24px] font-600 text-dark-gray">
          {title}
        </div>
      </div>
      {description && (
        <div className={"my-[12px] text-dark-gray"}>{description}</div>
      )}
      <Button
        className="flex items-center justify-center mt-[22px] py-[4px]"
        preset={isDisabled ? "disabled" : "outlined"}
        theme={isDisabled ? undefined : "light"}
        href={url}
        target="_blank"
        rel="referrer"
        isNoPadding
      >
        {buttonTitle}
        {!isDisabled && <NorthEastMiniIcon className="ml-[4px]" />}
      </Button>
    </div>
  )
}
