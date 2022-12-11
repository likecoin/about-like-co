import React from "react"
import cn from "classnames"
import { format as formatDate } from "date-fns"

export default function LatestNewsItem({
  className,
  title,
  date,
  url,
  image,
  ...props
}) {
  const formattedDate = formatDate(new Date(date), 'dd/MM/yyyy')
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
        'hover:relative',
        'hover:z-10',
        'hover:shadow-xl',
        'hover:ring-black',
        'hover:scale-[1.05]',
        'active:scale-[1]',
        className,
      )}
      href={url}
      title={title}
      target="_blank"
      rel="noopener"
      {...props}
    >
      <div className="aspect-w-15 aspect-h-8">
        <img
          className="block object-cover w-full h-full"
          loading="lazy"
          src={image}
          alt={title}
        />
      </div>
      <div className="p-[16px]">
        <div className="text-dark-gray text-[16px]">{title}</div>
        <div className="mt-[10px] text-[14px] text-medium-gray">{formattedDate}</div>
      </div>
    </a>
  )
}
