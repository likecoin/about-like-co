import React from "react"
import cn from "classnames"

export default function LatestNewsItem({
  className,
  title,
  platform,
  url,
  image,
  backgroundColor = null, 
  ...props
}) {
  return (
    <a
      className={cn(
        'block',
        'overflow-hidden',
        'bg-white',
        'border-like-cyan-light',
        'border-[1px]',
        'rounded-[8px]',
        'transition',
        'transition-transform',
        'hover:scale-[1.05]',
        'hover:shadow-xl',
        'hover:ring-black',
        'hover:relative',
        'hover:z-10',
        'active:scale-[1.05]',
        className
      )}
      {...props}
      href={url}
      title={title}
      target="_blank"
      rel="noreferrer"
    >
      <div
        className="aspect-w-1 aspect-h-1"
        style={{ backgroundColor }}
      >
        <div className="p-[24px]">
          <img
            className="block object-contain w-full h-full"
            src={image}
            alt={title}
          />
        </div>
      </div>
      <div className="p-[16px] border-t-[1px] border-like-cyan-light">
        <div className="text-[12px] font-bold text-like-green">{platform}</div>
        <div className="mt-[4px] text-dark-gray text-[16px] font-600">{title}</div>
      </div>
    </a>
  )
}
