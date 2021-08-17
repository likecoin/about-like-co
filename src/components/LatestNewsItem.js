import React from "react"
import cn from "classnames"

export default function LatestNewsItem({ className, title, date, url, image, ...props }) {
  return (
    <a
      className={cn('block bg-white border-like-cyan-light border-[1px] rounded-[8px] overflow-hidden', className)} {...props}
      href={url}
      title={title}
      target="_blank"
      rel="noreferrer"
    >
      <div className="aspect-w-15 aspect-h-8">
        <img
          className="block object-cover w-full h-full"
          src={image}
          alt={title}
        />
      </div>
      <div className="p-[16px]">
        <div className="text-dark-gray text-[16px]">{title}</div>
        <div className="mt-[10px] text-[14px] text-medium-gray">{date}</div>
      </div>
    </a>
  )
}
